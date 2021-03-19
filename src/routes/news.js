const axios  = require('axios')
const express = require('express')
const newsRouter = express.Router()



newsRouter.get('', async(req, res)=>{
    // res.render('news')

    try {
        const {data} = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
        res.render('news', {articles: data})
        
    } catch (err) {
        if(err.response){
            res.render('news', {articles: null})
            console.log(err.response.data);
            console.log(err.response.data);
            console.log(err.response.data);
        }else if(err.requiest) {
            res.render('news', {articles: null})
            console.log(err.requiest);

        }else{
            res.render('news', {articles: null})
            console.error('Err', err.message);
        }
    }
})


newsRouter.get('/:id', async(req, res)=>{
    const articleID = req.params.id

    try {
        const {data} = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`)
        res.render('newsSingle', {article: data})
        
    } catch (err) {
        if(err.response){
            res.render('newsSingle', {article: null})
            console.log(err.response.data);
            console.log(err.response.data);
            console.log(err.response.data);
        }else if(err.requiest) {
            res.render('newsSingle', {article: null})
            console.log(err.requiest);

        }else{
            res.render('newsSingle', {article: null})
            console.error('Err', err.message);
        }
    }
})

newsRouter.post('', async(req, res) => {
    let search = req.body.search
    try {
        const {data} = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        res.render('newsSearch', { articles : data })
    } catch (err) {
        if(err.response) {
            res.render('newsSearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('newsSearch', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    } 
})

module.exports = newsRouter