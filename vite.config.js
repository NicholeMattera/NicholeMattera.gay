import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import data from './data.json';

function formatDate(dateString) {
    const dateFormatter = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' })
    return dateFormatter.format(Date.UTC(...dateString.split('-').map(value => parseInt(value, 10))))
}

function formatTimeSpan(startDateString, endDateString) {
    const [ startYear, startMonth ] = startDateString.split('-').map(value => parseInt(value, 10))
    const [ endYear, endMonth ] = endDateString.split('-').map(value => parseInt(value, 10))

    let yearSpan, monthSpan = 0
    if (startMonth - 1 > endMonth) {
        yearSpan = endYear - startYear - 1
        monthSpan = 12 + endMonth - (startMonth - 1)
    } else {
        yearSpan = endYear - startYear
        monthSpan = endMonth - (startMonth - 1)
    }

    let result = '';
    if (yearSpan === 1) {
        result += '1 year '
    } else if (yearSpan > 1) {
        result += `${ yearSpan } years `
    }

    if (monthSpan === 1) {
        result += '1 month'
    } else if (monthSpan > 1) {
        result += `${ monthSpan } months`
    }

    return result.trimEnd()
}

function processData(data) {
    data.experiences.forEach((experience) => {
        experience.roles.forEach((role) => {
            if (role.end) {
                role.endText = formatDate(role.end)
                role.timeSpan = formatTimeSpan(role.start, role.end)
            }

            role.isPresent = !role.end
            role.startText = formatDate(role.start)
        })
    })

    data.awards.forEach((award) => {
        award.honors.forEach((honor) => {
            honor.dateText = formatDate(honor.date)
        })
    })

    return data;
}

export default defineConfig({
    build: {
        copyPublicDir: true,
        emptyOutDir: true,
        outDir: '../dist'
    },
    plugins: [
        createHtmlPlugin({
            minify: true,
            inject: {
                data: processData(data)
            }
        })
    ],
    publicDir: '../public',
    root: 'src'
})
