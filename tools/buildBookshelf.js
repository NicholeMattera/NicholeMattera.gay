const axios = require('axios')
const { XMLParser } = require("fast-xml-parser")
const fs = require('fs')
const fsPromises = require('fs/promises')
const sharp = require('sharp')

const overrides = {
  // Avatar: The Last Airbender - Imbalance, Part 1
  '1506704891': {
    user_read_at: 'Thu, 11 Mar 2021 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - Imbalance, Part 1'
  },
  // Avatar: The Last Airbender - Imbalance, Part 2
  '1506706525': {
    user_read_at: 'Mon, 15 Mar 2021 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - Imbalance, Part 2'
  },
  // Avatar: The Last Airbender - Imbalance, Part 3
  '1506708137': {
    user_read_at: 'Tue, 06 Apr 2021 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - Imbalance, Part 3'
  },
  // Avatar: The Last Airbender - Smoke and Shadow, Part 1
  '1616557613': {
    user_read_at: 'Thu, 14 Jan 2021 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - Smoke and Shadow, Part 1'
  },
  // Avatar: The Last Airbender - Smoke and Shadow, Part 2
  '1616557907': {
    user_read_at: 'Mon, 18 Jan 2021 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - Smoke and Shadow, Part 2'
  },
  // Avatar: The Last Airbender - Smoke and Shadow, Part 3
  '1616558385': {
    user_read_at: 'Fri, 22 Jan 2021 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - Smoke and Shadow, Part 3'
  },
  // Avatar: The Last Airbender - North and South, Part 1
  '1506700225': {
    user_read_at: 'Wed, 10 Feb 2021 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - North and South, Part 1'
  },
  // Avatar: The Last Airbender - North and South, Part 2
  '1506701299': {
    user_read_at: 'Tue, 16 Feb 2021 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - North and South, Part 2'
  },
  // Avatar: The Last Airbender - North and South, Part 3
  '1506701302': {
    user_read_at: 'Sun, 21 Feb 2021 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - North and South, Part 3'
  },
  // Avatar: The Last Airbender - The Promise, Part 1
  '1595828117': {
    user_read_at: 'Sat, 05 Dec 2020 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - The Promise, Part 1'
  },
  // Avatar: The Last Airbender - The Promise, Part 2
  '1595828753': {
    user_read_at: 'Sun, 06 Dec 2020 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - The Promise, Part 2'
  },
  // Avatar: The Last Airbender - The Promise, Part 3
  '1595829415': {
    user_read_at: 'Mon, 07 Dec 2020 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - The Promise, Part 3'
  },
  // Avatar: The Last Airbender - The Rift, Part 1
  '1616552956': {
    user_read_at: 'Sun, 27 Dec 2020 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - The Rift, Part 1'
  },
  // Avatar: The Last Airbender - The Rift, Part 2
  '1616552964': {
    user_read_at: 'Wed, 30 Dec 2020 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - The Rift, Part 2'
  },
  // Avatar: The Last Airbender - The Rift, Part 3
  '1616552972': {
    user_read_at: 'Tue, 05 Jan 2021 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - The Rift, Part 3'
  },
  // Avatar: The Last Airbender - The Search, Part 1
  '1616550546': {
    user_read_at: 'Fri, 11 Dec 2020 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - The Search, Part 1'
  },
  // Avatar: The Last Airbender - The Search, Part 2
  '1616551909': {
    user_read_at: 'Tue, 15 Dec 2020 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - The Search, Part 2'
  },
  // Avatar: The Last Airbender - The Search, Part 3
  '1616551844': {
    user_read_at: 'Sun, 20 Dec 2020 00:00:00 -0700',
    title: 'Avatar: The Last Airbender - The Search, Part 3'
  },
  // Cat + Gamer, Volume 1
  '1506727417': {
    user_read_at: 'Thu, 22 Dec 2022 00:00:00 -0700'
  },
  // Cat + Gamer, Volume 2
  '1506727425': {
    user_read_at: 'Thu, 12 Jan 2023 00:00:00 -0700'
  },
  // Heartstopper, Volume 1
  '1338617443': {
    user_read_at: 'Mon, 30 Jan 2023 00:00:00 -0700',
    title: 'Heartstopper, Volume 1'
  },
  // Is Love the Answer?
  '1646516494': {
    user_read_at: 'Thu, 23 Feb 2023 00:00:00 -0700'
  },
  // Let's Talk About Love
  '1250294509': {
    user_read_at: 'Wed, 18 Jan 2023 00:00:00 -0700'
  },
  // Loveless
  '133875193X': {
    user_read_at: 'Fri, 06 Jan 2023 00:00:00 -0700'
  },
  // Pokémon Adventures, Volume 1
  '1421530546': {
    title: 'Pokémon Adventures, Volume 1'
  },
  // Pokémon Adventures, Volume 2
  '1421530554': {
    title: 'Pokémon Adventures, Volume 2'
  },
  // Pokémon Adventures, Volume 3
  '1421530562': {
    title: 'Pokémon Adventures, Volume 3'
  },
  // Pokémon Adventures, Volume 4
  '1421530570': {
    title: 'Pokémon Adventures, Volume 4'
  },
  // Pokémon Adventures, Volume 5
  '1421530589': {
    title: 'Pokémon Adventures, Volume 5'
  },
  // Pokémon Adventures, Volume 6
  '1421530597': {
    title: 'Pokémon Adventures, Volume 6'
  },
  // Pokémon Adventures, Volume 7
  '1421530600': {
    title: 'Pokémon Adventures, Volume 7'
  },
  // The Subtle Art of Not Giving a F*ck
  '62641549': {
    user_read_at: 'Fri, 24 Mar 2023 00:00:00 -0700'
  },
  // The T in LGBT+: Everything You Need To Know About Being Trans
  '178504429X': {
    title: 'The T in LGBT+: Everything You Need To Know About Being Trans'
  }
}

async function downloadFeed () {
  console.log(`Downloading feed...`)
  const { data } = await axios.get('https://www.goodreads.com/review/list_rss/164427650', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0'
      }
  })

  return new XMLParser().parse(data)
}

async function fileExists (path) {
    try {
      await fsPromises.access(path, fs.constants.F_OK)

      return true
    } catch {
      return false
    }
}

async function downloadImage (name, url) {
  try {
    const fileName = name.toLowerCase().replaceAll(/[^a-zA-Z0-9]+/g, '-') + '.webp'
    const filePath = `${__dirname}/../public/images/book-covers/${fileName}`
    if (await fileExists(filePath)) return fileName

    console.log(`Downloading image for: ${name}`)
    const { data } = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0'
        },
        responseType: 'arraybuffer'
    })

    await sharp(data)
      .resize(undefined, 200)
      .toFile(filePath)

    return fileName
  } catch (error) {
    console.log(`Error while downloading image: ${error}`)

    return null
  }
}

async function buildBookshelf (feed) {
  const items = feed.rss.channel.item
  const bookshelf = {
    page: 'bookshelf',
    title: 'Nichole &quot;Nickel&quot; Mattera - Bookshelf',
    description: 'Books that Nichole has read and interested in',
    finished: [],
    readingNow: [],
    toRead: []
  }

  for (const index in items) {
    const item = (!overrides[items[index].isbn]) ? items[index] : {
      ...items[index],
      ...overrides[items[index].isbn]
    }
    const name = item.title.replaceAll('\n', ' ').replaceAll(/\s+/g, ' ')
    const author = item.author_name.replaceAll(/\s+/g, ' ')
    const url = item.link
    const tags = []
    const shelves = item.user_shelves.split(', ')
    
    if (item.user_rating >= 4) {
      tags.push('loved')
    } else if (item.user_rating >= 2) {
      tags.push('liked')
    }

    if (shelves.includes('lgbtqia')) {
      tags.push('lgbtqia')
    }

    if (shelves.includes('borrowed')) {
      tags.push('borrowed')
    }

    const fileName = await downloadImage(name, item.book_large_image_url)

    if (shelves.includes('currently-reading')) {
      bookshelf.readingNow.push({
        author,
        coverImage: `/images/book-covers/${fileName}`,
        name,
        tags,
        url
      })
    } else if (shelves.includes('to-read')) {
      const priority = shelves.includes('borrowed')

      bookshelf.toRead.push({
        author,
        coverImage: `/images/book-covers/${fileName}`,
        name,
        priority,
        tags,
        url
      })
    } else {
      const completionDate = (!item.user_read_at) ? '' : new Date(item.user_read_at).toISOString().substring(0, 10)

      bookshelf.finished.push({
        author,
        completionDate,
        coverImage: `/images/book-covers/${fileName}`,
        name,
        tags,
        url
      })
    }
  }

  return bookshelf
}

function sortBookshelf (bookshelf) {
  return {
    ...bookshelf,
    finished: bookshelf.finished.sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime()),
    readingNow: bookshelf.readingNow.sort((a, b) => b.progress - a.progress),
    toRead: bookshelf.toRead.sort((a, b) => {
        if (a.priority && !b.priority) return -1
        else if(!a.priority && b.priority) return 1
        else {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()

            if (nameA < nameB) return -1
            else if(nameA > nameB) return 1
        }

        return 0
    })
  }
}

function saveBookshelf (bookshelf) {
  return fsPromises.writeFile(`${__dirname}/../data/bookshelf.json`, JSON.stringify(bookshelf))
}

(async () => {
  const feed = await downloadFeed()
  const bookshelf = sortBookshelf(await buildBookshelf(feed))
  await saveBookshelf(bookshelf)
})()
