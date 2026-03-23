import { useState, useEffect } from 'react';
import { Loja } from '../@types/loja';
import { LojaService } from '../services/api';

export function useLojas() {
  const [lojas, setLojas] = useState<Loja[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LojaService.getLojas().then(data => {
      setLojas(data);
      setLoading(false);
    });
  }, []);

  return { lojas, loading };
}