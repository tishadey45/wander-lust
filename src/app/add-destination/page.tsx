"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PackagePlus, X } from "lucide-react";

const categories = [
  "Beach",
  "Mountain",
  "City",
  "Adventure",
  "Cultural",
  "Wildlife",
];

type FormState = {
  destinationName: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
};

const initialState: FormState = {
  destinationName: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

const fieldClassName = "h-10 bg-muted/50 md:text-sm";

export default function AddDestinationPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   const res=await fetch("http://localhost:5000/add-destination",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
   })
   const data = await res.json()
   console.log(data)
    // TODO: POST the package to the API once the endpoint exists.
    // router.push("/destinations");
  };

  const handleCancel = () => {
    setForm(initialState);
    router.push("/");
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
      <h1 className="text-3xl leading-tight font-light text-gray-900 md:text-4xl">
        Add New Travel Package
      </h1>

      <Card className="mt-10 px-0 py-0 shadow-sm md:mt-12">
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-5 px-6 py-7 md:px-8">
            {/* Destination Name */}
            <div className="space-y-2">
              <Label
                htmlFor="destination-name"
                className="text-xs font-semibold text-gray-900"
              >
                Destination Name
              </Label>
              <Input
                id="destination-name"
                required
                placeholder="Bali Paradise"
                value={form.destinationName}
                onChange={(event) =>
                  updateField("destinationName", event.target.value)
                }
                className={fieldClassName}
              />
            </div>

            {/* Country + Category */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="country"
                  className="text-xs font-semibold text-gray-900"
                >
                  Country
                </Label>
                <Input
                  id="country"
                  required
                  placeholder="Indonesia"
                  value={form.country}
                  onChange={(event) =>
                    updateField("country", event.target.value)
                  }
                  className={fieldClassName}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-gray-900">
                  Category
                </Label>
                <Select
                  value={form.category || undefined}
                  onValueChange={(value) =>
                    updateField("category", value ?? "")
                  }
                >
                  <SelectTrigger
                    data-placeholder={!form.category}
                    className="h-10 w-full bg-muted/50 md:text-sm"
                  >
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price + Duration */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="price"
                  className="text-xs font-semibold text-gray-900"
                >
                  Price (USD)
                </Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  step="1"
                  required
                  placeholder="e.g. 1299"
                  value={form.price}
                  onChange={(event) => updateField("price", event.target.value)}
                  className={fieldClassName}
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="duration"
                  className="text-xs font-semibold text-gray-900"
                >
                  Duration
                </Label>
                <Input
                  id="duration"
                  required
                  placeholder="e.g. 7 Days/6 Nights"
                  value={form.duration}
                  onChange={(event) =>
                    updateField("duration", event.target.value)
                  }
                  className={fieldClassName}
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="space-y-2">
              <Label
                htmlFor="departure-date"
                className="text-xs font-semibold text-gray-900"
              >
                Departure Date
              </Label>
              <Input
                id="departure-date"
                type="date"
                required
                value={form.departureDate}
                onChange={(event) =>
                  updateField("departureDate", event.target.value)
                }
                className={fieldClassName}
              />
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <Label
                htmlFor="image-url"
                className="text-xs font-semibold text-gray-900"
              >
                Image URL
              </Label>
              <Input
                id="image-url"
                type="url"
                required
                placeholder="https://example.com/bali.jpg"
                value={form.imageUrl}
                onChange={(event) =>
                  updateField("imageUrl", event.target.value)
                }
                className={fieldClassName}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-xs font-semibold text-gray-900"
              >
                Description
              </Label>
              <Textarea
                id="description"
                required
                placeholder="Describe the travel experience..."
                value={form.description}
                onChange={(event) =>
                  updateField("description", event.target.value)
                }
                className="min-h-32 bg-muted/50 md:text-sm"
              />
            </div>
          </CardContent>

          {/* Actions */}
          <CardFooter className="justify-end gap-3 border-t bg-background px-6 py-5 md:px-8">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="h-10 gap-2 border-destructive/30 px-5 text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <X className="size-4" />
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-10 gap-2 bg-[#24A3C6] px-5 text-white hover:bg-[#1c8cab]"
            >
              <PackagePlus className="size-4" />
              Add Travel Package
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
