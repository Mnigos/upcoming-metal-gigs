import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card'

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="flex w-full max-w-[600px] flex-col gap-4">
        <CardHeader>
          <CardTitle className="text-center text-3xl">e</CardTitle>
        </CardHeader>

        <CardContent></CardContent>
      </Card>
    </main>
  )
}
