import React, { useState, useEffect } from 'react';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import SearchInput from './Sections/SearchInput';
import CardItem from './Sections/CardItem';
import axiosInstance from '../../utils/axios';

const LandingPage = () => {

  const limit = 4;
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [filters, setFilters] = useState({
    continents: [],
    price: []
  });

  useEffect(() => {
    fetchProducts({ skip, limit });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProducts = async ({ skip, limit, loadMore = false, filters = {}, searchTerm = "" }) => {
    const params = {
      skip,
      limit,
      filters,
      searchTerm
    };

    try {
      const response = await axiosInstance.get('/products', { params });

      if (loadMore) {
        setProducts([...products, ...response.data.products]);
      } else {
        setProducts(response.data.products);
      }
      setHasMore(response.data.hasMore);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadMore = () => {
    const body = {
      skip: skip + limit,
      limit,
      loadMore: true,
      filters
    };
    fetchProducts(body);
    setSkip(skip + limit);
  };

  return (
    <section>
      <div className='text-center m-7'>
        <h2 className='text-2xl'>상품 사이트</h2>
      </div>
      
      <div className='flex gap-3'>
        <div className='w-1/2'>
          <CheckBox />
        </div>
        <div className='w-1/2'>
          <RadioBox />
        </div>
      </div>
        
      <div className='flex justify-end'>
        <SearchInput />
      </div>

      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 '>
        {products && products.map((product, idx) => 
          <CardItem product={product} key={idx}/>
        )}
      </div>

      {hasMore && 
        <div className='flex justify-center mt-5'>
          <button
            onClick={handleLoadMore}
            className='px-4 py-2 mt-5 text-white bg-black rounded-md hover:bg-gray-500'>
            더 보기
          </button>
        </div>
      }
    
    </section>
  );
};

export default LandingPage;
