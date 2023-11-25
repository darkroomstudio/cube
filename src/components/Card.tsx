import { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
	title?: string;
	subtitle?: string;
	imageContent?: ReactNode;
	body?: string;
}

export const Card = ({
	title = 'Title',
	subtitle = 'No Subtitle',
	imageContent = 'No Content',
	body = 'no content',
}: CardProps) => {
	return (
		<CardContainer>
			<CardBody>
				<CardImage>{imageContent && imageContent}</CardImage>
				<TitleWrap>
					<Title>{title}</Title>
					<Subtitle>{subtitle}</Subtitle>
				</TitleWrap>
				<Body>{body}</Body>
			</CardBody>
		</CardContainer>
	);
};

const CardContainer = styled.div`
	background: #fff;
	border-radius: 8px;
`;

const CardBody = styled.div`
	padding: 16px;
	user-select: none;
`;

const CardImage = styled.div`
	background: #ebebeb;
	padding: 24px;
	border-radius: 8px;
	color: #111111;
`;

const TitleWrap = styled.div`
	margin: 12px 0;
	display: flex;
	flex-direction: column;
	align-items: start;
`;

const Title = styled.p`
	margin: 4px 0;
	color: #111111;
	font-size: 24px;
	font-weight: bold;
	line-height: 1.1;
`;

const Subtitle = styled.p`
	margin: 0;
	color: #111111;
	opacity: 0.6;
	font-size: 14px;
	font-weight: lighter;
	font-weight: 700;
	line-height: 1.1;
`;

const Body = styled.p`
	margin: 8px 0;
	text-align: justify;
	font-size: 14px;
	color: #111111;
`;
