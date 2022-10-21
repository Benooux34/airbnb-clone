import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Assistance</h5>
            <p>Centre d'aide</p>
            <p>AirCover</p>
            <p>Informations de sécurité</p>
            <p>Soutenir les personnes en situation de handicap</p>
            <p>Options d'annulation</p>
            <p>Nos mesures face au Covid-19</p>
            <p>Signaler un problème de voisinage</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Communauté</h5>
            <p>Airbnb.org : réponse aux catastrophes</p>
            <p>Soutenir les réfugiés afghans</p>
            <p>Lutte contre la discrimination</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Accueil de voyageurs</h5>
            <p>Devenir hôte</p>
            <p>AirCover pour les hôtes</p>
            <p>Ressources pour les hôtes</p>
            <p>Forum de la communité</p>
            <p>Accueillir de manière responsable</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Airbnb</h5>
            <p>Newsroom</p>
            <p>En savoir plus sur les nouveautés</p>
            <p>Lettre de nos fondateurs</p>
            <p>Carrières</p>
            <p>Investisseurs</p>
            <p>Cartes cadeaux</p>
        </div>
    </div>
  )
}

export default Footer