import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Indonesia Regional API</h1>
          <p className="text-xl text-muted-foreground">
          API lengkap untuk data wilayah administratif Indonesia, meliputi 38 provinsi, kota/kabupaten, kecamatan, dan desa/kelurahan.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button asChild>
              <Link href="/docs">Dokumentasi API</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/rahmate2003/indonesia-regions-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-2">
                <li>
                  <code className="bg-muted p-1 rounded">/api/provinces</code> - Get all provinces
                </li>
                <li>
                  <code className="bg-muted p-1 rounded">/api/cities/{"{provinceId}"}</code> - Get cities by province ID
                </li>
                <li>
                  <code className="bg-muted p-1 rounded">/api/districts/{"{cityId}"}</code> - Get districts by city ID
                </li>
                <li>
                  <code className="bg-muted p-1 rounded">/api/villages/{"{districtId}"}</code> - Get villages by
                  district ID
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
          <Tabs defaultValue="fetch">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fetch">Fetch API</TabsTrigger>
              <TabsTrigger value="axios">Axios</TabsTrigger>
              <TabsTrigger value="jquery">jQuery</TabsTrigger>
            </TabsList>
            <TabsContent value="fetch" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Fetch API Example</CardTitle>
                  <CardDescription>Using the native Fetch API</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`// Get all provinces
fetch('/api/provinces')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Get cities by province ID
fetch('/api/cities/11')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Get districts by city ID
fetch('/api/districts/1101')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Get villages by district ID
fetch('/api/villages/1101010')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="axios" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Axios Example</CardTitle>
                  <CardDescription>Using Axios HTTP client</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`// Get all provinces
axios.get('/api/provinces')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// Get cities by province ID
axios.get('/api/cities/11')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// Get districts by city ID
axios.get('/api/districts/1101')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// Get villages by district ID
axios.get('/api/villages/1101010')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="jquery" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>jQuery Example</CardTitle>
                  <CardDescription>Using jQuery AJAX</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`// Get all provinces
$.ajax({
  url: '/api/provinces',
  method: 'GET',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.error('Error:', error);
  }
});

// Get cities by province ID
$.ajax({
  url: '/api/cities/11',
  method: 'GET',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.error('Error:', error);
  }
});

// Get districts by city ID
$.ajax({
  url: '/api/districts/1101',
  method: 'GET',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.error('Error:', error);
  }
});

// Get villages by district ID
$.ajax({
  url: '/api/villages/1101010',
  method: 'GET',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.error('Error:', error);
  }
});`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
