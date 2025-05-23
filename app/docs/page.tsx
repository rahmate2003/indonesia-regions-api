import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RegionSelector } from "@/components/region-selector"

export default function DocsPage() {
  return (
    <div className="max-w-5xl w-full mx-auto">
      <h1 className="text-4xl font-bold mb-8">API Documentation</h1>

      <div className="space-y-12">
        <section id="overview">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <Card>
            <CardContent className="p-6">
              <p>
                This API provides access to Indonesian administrative divisions data, including provinces,
                cities/regencies, districts, and villages. All endpoints return JSON responses with a consistent
                structure.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">Response Format</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`{
  "status": boolean,
  "message": string,
  "data": array | null
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        <section id="provinces">
          <h2 className="text-2xl font-bold mb-4">Endpoints</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get All Provinces</CardTitle>
                <CardDescription>Retrieve a list of all provinces in Indonesia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="font-semibold">Endpoint:</span>{" "}
                  <code className="bg-muted p-1 rounded">/api/provinces</code>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Method:</span> GET
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Query Parameters:</span>
                  <Table className="mt-2">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>sort</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Set to 'name' to sort results alphabetically by name</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Response Example:</span>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                    <code>{`{
  "status": true,
  "statusCode": 200,
  "message": "Provinces retrieved successfully",
  "data": [
    {
      "id": "11",
      "name": "Aceh"
    },
    {
      "id": "12",
      "name": "Sumatera Utara"
    },
    // ...
  ]
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
            <section/>
            <section id="cities">
            <Card>
              <CardHeader>
                <CardTitle>Get Cities by Province ID</CardTitle>
                <CardDescription>Retrieve a list of cities/regencies in a specific province</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="font-semibold">Endpoint:</span>{" "}
                  <code className="bg-muted p-1 rounded">/api/cities/{"{provinceId}"}</code>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Method:</span> GET
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Parameters:</span>
                  <Table className="mt-2">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>provinceId</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>The ID of the province</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Query Parameters:</span>
                  <Table className="mt-2">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>sort</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Set to 'name' to sort results alphabetically by name</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Response Example:</span>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                    <code>{`{
  "status": true,
  "statusCode": 200,
  "message": "Cities in province Aceh retrieved successfully",
  "data": [
    {
      "id": "1101",
      "provinceId": "11",
      "name": "Kabupaten Simeulue"
    },
    {
      "id": "1102",
      "provinceId": "11",
      "name": "Kabupaten Aceh Singkil"
    },
    // ...
  ]
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
            </section>
            <section id="districts">
            <Card>
              <CardHeader>
                <CardTitle>Get Districts by City ID</CardTitle>
                <CardDescription>Retrieve a list of districts in a specific city/regency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="font-semibold">Endpoint:</span>{" "}
                  <code className="bg-muted p-1 rounded">/api/districts/{"{cityId}"}</code>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Method:</span> GET
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Parameters:</span>
                  <Table className="mt-2">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>cityId</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>The ID of the city/regency</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Query Parameters:</span>
                  <Table className="mt-2">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>sort</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Set to 'name' to sort results alphabetically by name</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Response Example:</span>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                    <code>{`{
  "status": true,
  "statusCode": 200,
  "message": "Districts in city Kabupaten Simeulue retrieved successfully",
  "data": [
    {
      "id": "1101010",
      "cityId": "1101",
      "name": "Teupah Selatan"
    },
    {
      "id": "1101020",
      "cityId": "1101",
      "name": "Simeulue Timur"
    },
    // ...
  ]
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
            </section>
            <section id="villages">
            <Card>
              <CardHeader>
                <CardTitle>Get Villages by District ID</CardTitle>
                <CardDescription>Retrieve a list of villages in a specific district</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="font-semibold">Endpoint:</span>{" "}
                  <code className="bg-muted p-1 rounded">/api/villages/{"{districtId}"}</code>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Method:</span> GET
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Parameters:</span>
                  <Table className="mt-2">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>districtId</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>The ID of the district</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Query Parameters:</span>
                  <Table className="mt-2">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>sort</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Set to 'name' to sort results alphabetically by name</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Response Example:</span>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                    <code>{`{
  "status": true,
  "statusCode": 200,
  "message": "Villages in district Teupah Selatan retrieved successfully",
  "data": [
    {
      "id": "1101010001",
      "districtId": "1101010",
      "name": "Latiung"
    },
    {
      "id": "1101010002",
      "districtId": "1101010",
      "name": "Labuhan Bajau"
    },
    // ...
  ]
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
            </section>
          </div>
        </section>

        <section id="implementation-example">
          <h2 className="text-2xl font-bold mb-4">Implementation Example</h2>
          <Card>
            <CardHeader>
              <CardTitle>Cascading Dropdown for Region Selection</CardTitle>
              <CardDescription>
                A practical example of using the API to create dependent dropdowns for selecting Indonesian regions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="mb-4">
                  Below is a working example of cascading dropdowns that use the API to load provinces, cities, districts, and villages:
                </p>
                
                <div className="p-4 border rounded-md bg-muted/30">
                  <RegionSelector />
                </div>
              </div>           
            </CardContent>
          </Card>
        </section>

        <section id="error-handling">
          <h2 className="text-2xl font-bold mb-4">Error Handling</h2>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">
                The API returns appropriate HTTP status codes along with error messages in the response body.
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status Code</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>200</TableCell>
                    <TableCell>Success</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>404</TableCell>
                    <TableCell>Resource not found</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>500</TableCell>
                    <TableCell>Internal server error</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <h3 className="text-lg font-semibold mt-6 mb-2">Error Response Example</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`{
  "status": false,
  "statusCode": 404,
  "message": "Province with ID 999 not found",
  "data": null
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}






