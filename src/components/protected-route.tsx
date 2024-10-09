import { useGetMeUser } from '@/hooks/query-users/useGetmeUsers';
import React, { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute( { children }: PropsWithChildren ) {

    const { isError } = useGetMeUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (isError) {
      navigate("/admin/login");
    }
  }, [isError]);
  return children;
}

export default ProtectedRoute