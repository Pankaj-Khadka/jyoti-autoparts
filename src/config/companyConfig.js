const companyConfig = {
  products: import.meta.env.VITE_PRODUCTS
  ? import.meta.env.VITE_PRODUCTS.split(",").map((product) => product.trim())
  : [],
  brands: import.meta.env.VITE_COMPANY_BRANDS
    ? import.meta.env.VITE_COMPANY_BRANDS.split(",").map((item) => item.trim())
    : [],
  companyName: import.meta.env.VITE_COMPANY_NAME || "Jyoti Autoparts",
  tagline: import.meta.env.VITE_COMPANY_TAGLINE || "",
  phone: import.meta.env.VITE_PHONE || "",
  email: import.meta.env.VITE_EMAIL || "",
  address: import.meta.env.VITE_ADDRESS || "",
  establishedYear: import.meta.env.VITE_COMPANY_ESTABLISHED_YEAR || ""
};

export default companyConfig;