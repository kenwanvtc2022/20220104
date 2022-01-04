#!/usr/bin/env node

'use strict'

/* eslint-disable no-var */

const readline = require('readline-sync')

const items = []
const input = '' //input value must be defined as exit or user cannot exit the do-while block

do {
  const input = String(readline.question('enter command: ')).trim() //Failure to run with error "input is not defined" after change from var to let
  //let can only run inside the block, which is do-while block in this situation
  if (input.indexOf('add ') === 0) {
    const space = input.indexOf(' ')
    const item = input.substring(space).trim()
    console.log(`adding "${item}"`)
    if (items.indexOf(item.toLowerCase()) < 0) {
      items.push(item)
    } else {
      console.log(`Item Added. Please enter again.`)
    }
  }
  if (input.indexOf('remove ') === 0) {
    const space = input.indexOf(' ')
    const item = input.substring(space).trim()
    console.log(`removing "${item}"`)
    const pos = items.indexOf(item.toLowerCase())
    items.splice(pos, 1)
  }
  if (input.indexOf('list') === 0) {
    for (let i = 0; i < items.length; i++) {
      console.log(`${i}. ${items[i]}`)
    }
  }
  if (input.indexOf('exit') === 0) {
    break
  }
} while (input !== 'exit')