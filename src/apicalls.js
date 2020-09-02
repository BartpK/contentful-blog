import { apiKey } from './secret'


const getBlogsData = async () => {
    const res = await fetch(`https://cdn.contentful.com/spaces/leqwowjh1stb/environments/master/entries?access_token=${apiKey}`)
    const data = await res.json();
    return data;
}

const getAssetById = (id, data) => {
    const imageUrl = data.includes.Asset.filter(asset => {
        return asset.sys.id === id
    })[0].fields.file.url
    return imageUrl;
}

const getBlogContent = (contentArray) => {
    const contentMarkup = contentArray.map(paragraph => {
        return (
            paragraph.content[0].value
        )
    })
    return contentMarkup;
}

const getBlogPreviewText = (firstParagraph) => {
    const previewString = firstParagraph.substring(0, 139) + '...'
    return previewString;
}

const createBlogObjects = async () => {
    const data = await getBlogsData();
    const blogObjects = data.items.map(entry => {
        return (
            {
                blogTitle: entry.fields.blogTitle,
                blogAuthor: entry.fields.author,
                blogPreview: getAssetById(entry.fields.previewimage.sys.id, data),
                blogMain: getAssetById(entry.fields.mainimage.sys.id, data),
                blogContent: getBlogContent(entry.fields.blogContent.content),
                blogSlug: entry.fields.slug,
                blogExcerpt: getBlogPreviewText(getBlogContent(entry.fields.blogContent.content)[0])
            }
        )
    })
    return blogObjects
}

export default createBlogObjects;