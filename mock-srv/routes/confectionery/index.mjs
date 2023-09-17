'use strict'

const data = [
    {
        id: "B1",
        name: "Chocolate Bar",
        rrp: "22.40",
        info: "Deliciously overpriced chocolate.",
    },
]

export default async function (fastify) {
    fastify.get('/', async function (request, reply) {
        return data 
    })
}