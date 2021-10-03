import React from 'react'
import { useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import styled from "styled-components";

const Button = styled.button`
  background-color: #28B463;
  cursor: pointer;
  border:none;
  outline: none;
  text-align: center;
  font-weight: 300;
  border-radius: 30px;
  padding: 10px 24px;
  text-size: 50px;
  color: white;
  width: 100%;
  font-size : 17px;
  text-decoration: none;
`;

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Button  color='#ff5c5c' onClick={onPresentConnectModal} {...props}>
      {t('Connect Wallet')}
    </Button>
  )
}

export default ConnectWalletButton
