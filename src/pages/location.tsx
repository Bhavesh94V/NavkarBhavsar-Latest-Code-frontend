import { MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const locations = [
    {
        city: "Mumbai",
        state: "Maharashtra",
        building: "Duru House",
        address:
            "Juhu Tara Road, 2nd & 3rd floor, Duru House, Juhu, Mumbai, Maharashtra, 400049",
        mapUrl:
            "https://www.google.com/maps/search/?api=1&query=Duru+House+Juhu+Tara+Road+Mumbai",
    },
    {
        city: "Pune",
        state: "Maharashtra",
        building: "Sky One",
        address:
            "Unit Nos.101-104, 1st Floor, Kalyani Nagar, Pune, Maharashtra, 411006",
        mapUrl:
            "https://www.google.com/maps/search/?api=1&query=Sky+One+Kalyani+Nagar+Pune",
    },
    {
        city: "Bangalore",
        state: "Karnataka",
        building: "Concorde Towers UB City",
        address: "#24 Vittal Mallya Road, Level 15, Ashok Nagar, Bengaluru, Karnataka, 560001",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Concorde+Towers+UB+City+Vittal+Mallya+Road+Bengaluru",
    },
    {
        city: "Hyderabad",
        state: "Telangana",
        building: "Phoenix Tech Tower",
        address: "Genpact Road, 3rd floor, Phoenix Towers, Hyderabad, Telangana, 500007, IND",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Phoenix+Tech+Tower+Genpact+Road+Hyderabad",
    },
    {
        city: "Kolkata",
        state: "West Bengal",
        building: "PS Arcadia Central",
        address: "4a Carmac Street, 9th Floor, PS Arcadia, Kolkata, West Bengal, 700016, IND",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=PS+Arcadia+4a+Carmac+Street+Kolkata",
    },
    {
        city: "Noida",
        state: "Uttar Pradesh",
        building: "Green Boulevard",
        address: "Green Boulevard, 5th Floor, Tower C, Block B, Sector 62, Noida, Uttar Pradesh, 201301, IND",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Green+Boulevard+Sector+62+Noida",
    },
    {
        city: "Chandigarh",
        state: "Chandigarh",
        building: "SCO 54-55-56",
        address: "Sector 17 A, 3rd & 4th Floor, Chandigarh, Chandigarh, 160017, IND",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SCO+54-55-56+Sector+17+A+Chandigarh",
    },
    {
        city: "Jaipur",
        state: "Rajasthan",
        building: "Jaipur Centre",
        address: "Tonk Road, & B2 Bypass Junction, Sector B-4, Near Airport Jaipur Rajasthan 302018",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Tonk+Road+B2+Bypass+Junction+Jaipur",
    },
    {
        city: "Surat",
        state: "Gujarat",
        building: "Vasupujya Rio Empire",
        address: "Opp Pal RTO Surat Gujarat 395009",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vasupujya+Rio+Empire+Pal+RTO+Surat",
    },
    {
        city: "Indore",
        state: "Madhya Pradesh",
        building: "DNR 90",
        address: "Yeshwant Niwas Road, 569/3, Unit Nos.301, 3rd floor, Indore, Madhya Pradesh, 452003, IND",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=DNR+90+Yeshwant+Niwas+Road+Indore",
    },
];

const Locations = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">

                <section className='pt-28 pb-20 bg-gradient-hero text-white text-center relative'>
                    <div className='container mx-auto px-6 relative z-10'>
                        <MapPin className='w-16 h-16 mx-auto mb-6 text-gray-200' />
                        <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6'>
                            Find Us Across India
                        </h1>
                        <p className='max-w-3xl mx-auto text-lg text-gray-200/90'>
                            We have offices strategically located across major cities in India to serve you better.
                            Visit us at any of our locations or connect with us digitally.
                        </p>
                    </div>
                </section>


                {/* Locations Grid */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {locations.map((location, index) => (
                                <Card
                                    key={index}
                                    className="group p-6 hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 bg-card"
                                >
                                    <div className="mb-4">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground mb-1">
                                                    {location.city}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">{location.state}</p>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <MapPin className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <p className="font-semibold text-foreground mb-2">{location.building}</p>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {location.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-border">
                                        <Button
                                            onClick={() => window.open(location.mapUrl, "_blank")}
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                            variant="outline"
                                        >
                                            <MapPin className="w-4 h-4 mr-2" />
                                            View on Map
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA Section */}
                <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4 text-foreground">
                                Can't Visit Us?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                No worries! Get in touch with us through phone, email, or our contact form.
                                We're always here to help you with your needs.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button size="lg" asChild>
                                    <Link to="/contact">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Contact Us
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <a href="tel:+917567564286">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Us
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Locations;