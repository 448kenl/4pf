import { ArchiveEntry, Collection, Product, Review } from '@/lib/types';

export const announcementMessages = [
  'NEW DROP LIVE — LIMITED UNITS ONLY',
  'ARCHIVE ACCESS NOW OPEN',
  'JOIN THE NETWORK FOR EARLY ACCESS',
  'FREE SHIPPING ON ORDERS OVER $150'
];

export const products: Product[] = [
  { slug:'dna-heavyweight-tee-black', title:'DNA Heavyweight Tee — Black', price:88, comparePrice:108, badge:'New', category:'Tops', collection:'new-drop', sizes:['S','M','L','XL'], colors:['Black'], description:'Heavy structure, strong print placement, and a fit designed to hold shape through repeat wear.', images:['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200'], stock:24, featured:true, bestSelling:true },
  { slug:'archive-uniform-hoodie-bone', title:'Archive Uniform Hoodie — Bone', price:168, comparePrice:198, badge:'Limited', category:'Outerwear', collection:'new-drop', sizes:['S','M','L','XL'], colors:['Bone'], description:'Designed for everyday rotation with a stronger visual identity than standard basics.', images:['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200'], stock:9, featured:true },
  { slug:'network-issue-cargo-washed-grey', title:'Network Issue Cargo — Washed Grey', price:154, comparePrice:174, badge:'Limited', category:'Bottoms', collection:'bottoms', sizes:['S','M','L','XL'], colors:['Washed Grey'], description:'Utility-weight pants tuned for movement and proportion.', images:['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200'], stock:16, featured:false, bestSelling:true },
  { slug:'first-signal-zip-hoodie', title:'First Signal Zip Hoodie', price:182, comparePrice:220, badge:'Limited', category:'Outerwear', collection:'outerwear', sizes:['S','M','L','XL'], colors:['Black','Washed Grey'], description:'Premium zip layer with clean architecture.', images:['https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1200'], stock:7, featured:false },
  { slug:'pressure-class-cargo', title:'Pressure Class Cargo', price:148, comparePrice:178, badge:'Restock', category:'Bottoms', collection:'bottoms', sizes:['S','M','L','XL'], colors:['Black'], description:'Structured cargo designed to anchor the full look.', images:['https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200'], stock:31, featured:false },
  { slug:'recorded-motion-cap', title:'Recorded Motion Cap', price:58, comparePrice:72, badge:'New', category:'Accessories', collection:'accessories', sizes:['OS'], colors:['Black','Bone'], description:'Low-profile cap with archive insignia.', images:['https://images.unsplash.com/photo-1521369909029-2afed882baee?w=1200'], stock:40, featured:true },
  { slug:'archive-access-tote', title:'Archive Access Tote', price:62, comparePrice:79, badge:'Archive', category:'Accessories', collection:'archive', sizes:['OS'], colors:['Bone'], description:'Carry system for daily movement.', images:['https://images.unsplash.com/photo-1591561954557-26941169b49e?w=1200'], stock:0, featured:false },
  { slug:'rare-goods-mesh-short', title:'Rare Goods Mesh Short', price:84, comparePrice:104, badge:'Sold Out', category:'Bottoms', collection:'archive', sizes:['S','M','L','XL'], colors:['Black'], description:'Breathable mesh short with premium trim.', images:['https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1200'], stock:0, featured:false }
];

export const collections: Collection[] = [
  { slug:'new-drop', title:'New Drop', intro:'The latest release from DUMPERS NETWORK ARCHIVE. Limited units. Sharp turnover. No wasted placements.' },
  { slug:'archive', title:'Archive', intro:'Past releases, sold-out product history, and collectible references from earlier cycles.' },
  { slug:'tops', title:'Tops', intro:'Graphic tees, elevated essentials, and upper-body staples with strong visual weight.' },
  { slug:'bottoms', title:'Bottoms', intro:'Pants and shorts built to anchor the fit without killing the silhouette.' },
  { slug:'outerwear', title:'Outerwear', intro:'Layering pieces with more presence, more structure, and longer shelf value.' },
  { slug:'accessories', title:'Accessories', intro:'Supporting pieces that finish the system: headwear, bags, add-ons, and smaller collectibles.' },
  { slug:'bundles', title:'Bundles', intro:'Curated combinations designed to increase value and tighten the full look.' }
];

export const archiveEntries: ArchiveEntry[] = [
  { slug:'drop-01-pressure-protocol', title:'Drop 01: Pressure Protocol', season:'S24', status:'Sold Out', notes:'Initial network issue release. Full sell-through in 36 hours.', image:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200' },
  { slug:'drop-02-uniform-state', title:'Drop 02: Uniform State', season:'F24', status:'Reference Only', notes:'Core uniform silhouettes and washed neutrals.', image:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200' },
  { slug:'drop-03-recorded-motion', title:'Drop 03: Recorded Motion', season:'W25', status:'Returning Soon', notes:'Select accessories are entering controlled restock.', image:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200' }
];

export const reviews: Review[] = [
  { productSlug:'dna-heavyweight-tee-black', name:'Jordan M.', rating:5, quote:'Weight and silhouette are exactly what I wanted.' },
  { productSlug:'archive-uniform-hoodie-bone', name:'Kael R.', rating:5, quote:'Premium feel. Feels like a collectible.' },
  { productSlug:'pressure-class-cargo', name:'Nia T.', rating:4, quote:'Perfect fit stack and strong construction.' }
];

export const lookbookFrames = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400',
  'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1400',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1400',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1400',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1400',
  'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1400'
];
