'use client'
import React, { Component } from 'react'
import { Container, Grid, Box, styled } from '@mui/material'
import { Adsense } from '@/components/adsense'
import CardMultiple from './CardMultiple'
import CardBasic from './CardBasic'
import ReadNews from './ReadNews'

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Grid container spacing={2} sx={{ pt: '24px', pb: '56px' }}>
          <Grid item xs={12}>
            <Adsense
              style={{ display: 'block' }}
              client='ca-pub-9643912173816808'
              slot='1480448417'
              format='auto'
              responsive='true'
            ></Adsense>
          </Grid>
          <Grid item xs={8}>
            <ReadNews />
          </Grid>
          <Grid item xs={4}>
            <StickyBox>
              <CardMultiple />
            </StickyBox>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: '48px' }}>
          {[...Array(8)].map((item, index) => (
            <Grid key={index} item xs={3}>
              <CardBasic />
            </Grid>
          ))}
        </Grid>
        <Box height='128px' />
      </Container>
    )
  }
}

const StickyBox = styled(Box)({
  position: 'sticky',
  top: '175px'
})
