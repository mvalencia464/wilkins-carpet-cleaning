import { useState, useEffect } from 'react';
import { client } from '../../tina/__generated__/client';

export const useTinaHero = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.queries.hero({ relativePath: "main.md" });
        setData(result.data.hero);
      } catch (error) {
        console.error('Error fetching hero data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export const useTinaServices = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.queries.servicesConnection();
        setData(result.data.servicesConnection.edges.map((edge: any) => edge.node));
      } catch (error) {
        console.error('Error fetching services data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export const useTinaTestimonials = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.queries.testimonialsConnection();
        setData(result.data.testimonialsConnection.edges.map((edge: any) => edge.node));
      } catch (error) {
        console.error('Error fetching testimonials data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export const useTinaAbout = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.queries.about({ relativePath: "main.md" });
        setData(result.data.about);
      } catch (error) {
        console.error('Error fetching about data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export const useTinaBlog = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.queries.blogConnection();
        setData(result.data.blogConnection.edges.map((edge: any) => edge.node));
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};
