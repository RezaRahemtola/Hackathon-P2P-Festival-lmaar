import { Route, RouteProps } from 'react-router-dom';

import { Text, VStack } from '@chakra-ui/react';

import colors from 'theme/foundations/colors';

type AuthRouteProps = { children: JSX.Element } & RouteProps;

const AuthRoute = ({ children, ...rest }: AuthRouteProps): JSX.Element => (
	<Route {...rest}>
		<VStack spacing="56px" mt={{ base: '96px', md: '132px' }}>
			<VStack spacing="16px">
				<Text
					fontSize={{ base: '32px', md: '56px', lg: '64px' }}
					fontWeight="extrabold"
					bgGradient={`linear-gradient(90deg, ${colors.black[100]} 0%, ${colors.black[900]} 100%)`}
					bgClip="text"
					id="title"
					textAlign="center"
				>
					The Art
				</Text>
				<Text
					fontSize={{ base: '6px', '3xs': '10px', '2xs': '12px', xs: '14px', '2sm': '16px' }}
					id="sub-title"
					textAlign="center"
				>
					NFT Platform for the Paris P2P Festival
				</Text>
			</VStack>
			<VStack w={{ base: '90%', md: '496px' }}>{children}</VStack>
		</VStack>
	</Route>
);

export default AuthRoute;