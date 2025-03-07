// import React from 'react';
// // import { AttractionsCard } from '@/components/AttractionsCard/AttractionsCard';

// export default function SearchResults() {
//   const [data] = useAtom(dataAtom);

//   const { attractions, flight, accommodation, cars } = data;

//   let totalAttractionPriceTotal = 0;
//   attractions.forEach((attraction) => {
//     const price = parseFloat(attraction.price.current.replace(/[^0-9.]/g, ''));
//     totalAttractionPriceTotal += price;
//   });

//   return (
//     <Stack alignItems="center" gap={8}>
//       <Container>
//         <Stack gap={4}>
//           <Scrim
//             backgroundSlot={
//               <AspectRatio ratio="21:9">
//                 <Image
//                   src="https://cf.bstatic.com/xdata/images/city/600x600/977242.jpg?k=72bfe23a6d7a496e0305b94bbb28ce197f3df2d6dd28986c3760a5f1c931664c&o="
//                   alt="Random picture"
//                 />
//               </AspectRatio>
//             }
//             position="top"
//           >
//             <Box padding={10}>
//               <Text variant="headline_1">You are going to... Paris</Text>
//             </Box>
//           </Scrim>
//           <Box padding={4}>
//             <Stack gap={8}>
//               <Text variant="headline_1">Your Travel Package</Text>

//               <FlightCard {...flight} />

//               <AccommodationsCard {...accommodation} />

//               <ProductCard {...cars} />

//               <AttractionsCard
//                 attractions={attractionsMockData}
//                 totalAttractionPriceTotal={totalAttractionPriceTotal}
//               />

//               <Insurance insurancePrice={64} />

//               <Basket
//                 flightsPrice={flight.total.price}
//                 attractionsPrice={totalAttractionPriceTotal}
//                 accommodationPrice={accommodation.pricing.current}
//                 carPrice={cars.price.amount}
//                 insurancePrice={64}
//               />
//             </Stack>
//           </Box>
//         </Stack>
//       </Container>
//     </Stack>
//   );
// }
