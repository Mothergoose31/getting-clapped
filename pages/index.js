import React,{useState,useEffect} from "react"
import Head from 'next/head'
import Container from '@material-ui/core/Container';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import  WinsChart from "../components/WinsChart.js"

import styles from '../styles/Home.module.css'

import dab from "../images/dab.gif"
import takeTheL from "../images/takeTheL.gif"
import equal from  "../images/equal.gif"




export default function Home() {
const [byron,setByronWins] = useState("")
const [nata,setNataWins] = useState("")


var byronWins = 5
var nataWins= 6

  useEffect(()=>{
    

    

  if(byronWins === nataWins){
        setByronWins(equal);
        setNataWins(equal);
  } 

  if (nataWins > byronWins){
      setByronWins(takeTheL)
      setNataWins(dab)
  }

  if (nataWins < byronWins){
      setByronWins(dab)
      setNataWins(takeTheL)
  }
    



  },[])
  
  
  

  return (
  <div className={styles.container}>
    <Head>
    <link rel="shortcut icon" href="../public/favicon.ico" />
      <title>Are you getting Clapped?</title>
      <meta name="description" content="Yep Byron is getting Clapped" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <nav className={styles.nav}>
<svg width="210" height="84" viewBox="0 0 210 84" className={styles.logo} class="css-1j8o68f"><defs id="SvgjsDefs3956"></defs><g id="SvgjsG3957" featurekey="textGroupContainer" transform="matrix(1,0,0,1,0,7)" fill="#111111"><rect xmlns="http://www.w3.org/2000/svg" y="0" x="0" height="1" width="1" opacity="0"></rect><rect xmlns="http://www.w3.org/2000/svg" y="68.54761904761905" x="0" width="95" height="2"></rect><rect xmlns="http://www.w3.org/2000/svg" y="68.54761904761905" x="115" width="95" height="2"></rect></g><g id="SvgjsG3958" featurekey="YhTCwJ-0" transform="matrix(2.6773760072817305,0,0,2.6773760072817305,2.4832683149630395,-13.065595221936213)" fill="#111111"><path d="M8.14 5.48 q1.66 0 2.94 0.59 t2.06 1.63 l-1.46 1.06 q-0.64 -0.86 -1.58 -1.29 t-1.96 -0.43 q-2.26 0 -3.81 1.72 t-1.59 4.16 q0 2.52 1.54 4.19 t3.86 1.69 q2.54 0 4.1 -1.98 l1.26 1.06 q-1.86 2.48 -5.36 2.48 q-3.1 0 -5.13 -2.14 t-2.07 -5.3 q0 -3.16 2.05 -5.28 t5.15 -2.16 z M17.26 4.880000000000001 l0 15.12 l-1.56 0 l0 -15.12 l1.56 0 z M23.96 10.4 q2.04 0 2.97 0.96 t0.95 2.9 l0 4.2 q0 0.6 0.14 1.54 l-1.5 0 q-0.1 -0.18 -0.1 -1.4 l-0.04 0 q-1.06 1.6 -3.08 1.64 q-1.54 0 -2.51 -0.77 t-0.97 -2.01 q0 -1.7 1.4 -2.49 t4.38 -0.79 l0.72 0 l0 -0.26 q0 -2.04 -2.32 -2.08 q-1.68 0 -2.78 1.02 l-0.98 -1.02 q1.44 -1.4 3.72 -1.44 z M21.5 17.3 q0 1.58 2.06 1.62 q1.22 0 1.99 -0.78 t0.77 -2.28 l0 -0.36 l-1.72 0 q-1.38 0 -2.23 0.44 t-0.87 1.36 z M35.62 10.4 q2.22 0 3.56 1.4 t1.36 3.52 q0 2.1 -1.36 3.49 t-3.32 1.43 q-1.2 0 -2.17 -0.52 t-1.43 -1.38 l-0.04 0 l0 6.22 l-1.56 0 l0 -13.92 l1.56 0 l0 1.36 l0.04 0 q1.38 -1.6 3.36 -1.6 z M32.22 15.32 q0 1.54 0.93 2.49 t2.39 0.99 q1.46 0 2.38 -0.97 t0.94 -2.51 q0 -1.52 -0.93 -2.5 t-2.41 -0.98 q-1.44 0 -2.36 0.97 t-0.94 2.51 z M47.839999999999996 10.4 q2.22 0 3.56 1.4 t1.36 3.52 q0 2.1 -1.36 3.49 t-3.32 1.43 q-1.2 0 -2.17 -0.52 t-1.43 -1.38 l-0.04 0 l0 6.22 l-1.56 0 l0 -13.92 l1.56 0 l0 1.36 l0.04 0 q1.38 -1.6 3.36 -1.6 z M44.44 15.32 q0 1.54 0.93 2.49 t2.39 0.99 q1.46 0 2.38 -0.97 t0.94 -2.51 q0 -1.52 -0.93 -2.5 t-2.41 -0.98 q-1.44 0 -2.36 0.97 t-0.94 2.51 z M59.44 10.4 q2.08 0 3.25 1.31 t1.19 3.71 l0 0.38 l-7.56 0 q0.12 1.3 0.98 2.14 t2.1 0.86 q1.9 0 2.96 -1.42 l1.18 0.92 q-0.74 0.96 -1.74 1.45 t-2.4 0.49 q-2.14 0 -3.44 -1.39 t-1.32 -3.53 q0 -2.12 1.33 -3.5 t3.47 -1.42 z M62.199999999999996 14.48 q-0.06 -1.22 -0.79 -1.93 t-2.05 -0.71 q-1.2 0 -2.02 0.68 t-1.02 1.96 l5.88 0 z M75.63999999999999 4.880000000000001 l0 15.12 l-1.56 0 l0 -1.66 l-0.04 0 q-0.48 0.9 -1.46 1.4 t-2.14 0.5 q-1.98 0 -3.31 -1.41 t-1.37 -3.51 q0 -2.14 1.37 -3.52 t3.55 -1.4 q2.02 0 3.36 1.6 l0.04 0 l0 -7.12 l1.56 0 z M67.44 15.32 q0 1.54 0.93 2.5 t2.39 0.98 q1.46 0 2.37 -0.96 t0.95 -2.52 q0 -1.52 -0.93 -2.5 t-2.41 -0.98 q-1.44 0 -2.35 0.97 t-0.95 2.51 z"></path></g><g id="SvgjsG3959" featurekey="duLK5n-0" transform="matrix(1.4344261958694569,0,0,1.4344261958694569,99.19672141239162,55.31147608261087)" fill="#111111"><path d="M4 20 c-0.64 0 -1.16 -0.52 -1.16 -1.18 c0 -0.64 0.52 -1.16 1.16 -1.16 s1.16 0.52 1.16 1.16 c0 0.66 -0.52 1.18 -1.16 1.18 z M4.94 16.08 l-1.78 0 c0 -3.08 1.8 -5.7 2 -6.02 c0.52 -0.78 0.58 -1.3 0.46 -1.72 c-0.12 -0.44 -0.4 -0.8 -0.78 -1.02 c-0.26 -0.14 -0.54 -0.24 -0.84 -0.24 c-0.14 0 -0.3 0.02 -0.44 0.06 c-0.44 0.12 -0.8 0.42 -1.02 0.8 c-0.12 0.24 -0.2 0.56 -0.2 0.86 l-1.78 0 c0 -0.58 0.16 -1.22 0.46 -1.74 c0.44 -0.78 1.18 -1.34 2.08 -1.58 c0.3 -0.08 0.6 -0.12 0.9 -0.12 c0.6 0 1.18 0.14 1.72 0.42 c0.78 0.46 1.36 1.2 1.6 2.1 c0.24 0.88 0.12 1.54 -0.26 2.2 c-0.28 0.5 -2.12 2.92 -2.12 6 z"></path></g></svg>    </nav>
    <br/>
    <div>
      
    <Container fluid>
      
      <div className = {styles.cardContainer}>
        <div>
          <Card className={styles.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="bg image"
                height="140"
                image={nata}
                title="celebratory dance"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Nata
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p" id ="NataWins">
                  Wins: {nataWins}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </div>
          
          <div>
            <Card className={styles.root}>
                <CardActionArea>
                  <CardMedia
                      component="img"
                      alt="take the L dance"
                      height="140"
                      image={byron}
                      title="take the L dance"
                      />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Byron
                      </Typography>
                      <Typography variant="h5" color="textSecondary" component="p" id = "ByronWins">
                        Wins: {byronWins}
                      </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          </div>
        </div>
        <br/>
        <br/>
        <div>
          <WinsChart/>
        </div>
          
        
    </Container> 
      </div>
    </div>
  )
}
