import styled from 'styled-components';
import fashionStore from 'assets/images/fashion-store.jpg';
import essentials from 'assets/images/essentials-bg.jpeg';
import reseller from 'assets/images/reseller.jpeg';
import supplier from 'assets/images/supplier.jpeg';

const FashionStore = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	width: 80%;
	margin: 0 auto 4rem;
	padding: 20px 24px 22px;
	height: 546px;
	border-radius: 4px;
	background-size: contain;
	background: url(${fashionStore});
`;

const Essentials = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	width: 80%;
	margin: 0 auto 4rem;
	padding: 20px 24px 22px;
	height: 546px;
	border-radius: 4px;
	background-size: contain;
	background: url(${essentials});

	img {
		padding-right: 1rem;
	}
`;

const Reseller = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	width: 80%;
	margin: 0 auto 4rem;
	padding: 20px 24px 22px;
	height: 546px;
	border-radius: 4px;
	background-size: contain;
	background: url(${reseller});
`;

const Supplier = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	width: 80%;
	margin: 0 auto 4rem;
	padding: 20px 24px 22px;
	height: 300px;
	border-radius: 4px;
	background-size: contain;
	background: url(${supplier});
`;

export { FashionStore, Essentials, Reseller, Supplier };
