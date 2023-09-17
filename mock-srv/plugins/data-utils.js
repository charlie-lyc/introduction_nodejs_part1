'use strict'
import fp from 'fastify-plugin'

const catToPrefix = {
    electronics: 'A',
    confectionery: 'B'
}

const calculateId = (idPrefix, data) => {
    const sorted = [...new Set( data.map((ele) => ele.id) )]
    const next = Number(sorted.pop().slice(1)) + 1
    return `${idPrefix}${next}`
}

export default fp(async function (fastify, opts) {
    fastify.decorate('mockDataInsert', function (request, category, data) {
        const idPrefix = catToPrefix[category]
        const id = calculateId(idPrefix, data)
        data.push({ id, ...request.body })
        return data
    })
})