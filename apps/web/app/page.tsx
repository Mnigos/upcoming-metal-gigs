import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card'
import { defineQuery } from 'next-sanity'
import Image from 'next/image'

import { client } from '~/lib/sanity/client'

const GIGS_QUERY = defineQuery(`*[
  _type == "gig" && now() < date
]{_id, name, date, imageUrl, venue -> { name, city }, artists[] -> { name } }
| order(date asc)`)

export default async function Home() {
  const gigs = await client.fetch(
    GIGS_QUERY,
    {},
    {
      next: {
        revalidate: 3600,
      },
    }
  )

  return (
    <main className="flex flex-col gap-4">
      <header>
        <h1 className="text-4xl font-semibold">Upcoming Metal Gigs</h1>
      </header>

      <section className="grid grid-cols-3 gap-2">
        {gigs.map(({ _id, name, imageUrl, date, artists, venue }) => (
          <Card
            key={_id}
            className="flex w-full max-w-[400px] flex-col justify-between gap-4 p-0 pb-2"
          >
            {name && (
              <CardHeader>
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={name}
                    width={400}
                    height={200}
                    objectFit="cover"
                    className="max-h-[200px] rounded-t-lg object-cover object-top"
                  />
                )}

                <div className="px-2 pt-2">
                  <CardTitle className="text-3xl">{name}</CardTitle>
                  <CardDescription>
                    {date && new Date(date).toLocaleDateString()}
                    {date && venue && <>&nbsp;&bull;&nbsp;</>}
                    {venue?.name}
                  </CardDescription>
                </div>
              </CardHeader>
            )}

            <CardContent className="px-2">
              {artists?.map(({ name }, index) => (
                <>
                  {name}
                  {index + 1 < artists.length && <>&nbsp;&bull;&nbsp;</>}
                </>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
