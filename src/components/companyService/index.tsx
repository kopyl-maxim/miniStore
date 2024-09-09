import React from 'react';
import useStyles from './styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import CompanyServiceItem from './сompanyServiceItem';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

interface Props {
    // define your props here
}

const CompanyService: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.companyService}>
            <Box className={classes.container}>
                <CompanyServiceItem label={'FREE DELIVERY'}
                                    message={'Consectetur adipi elit lorem ipsum dolor sit amet.'}
                                    icon={<ShoppingCartIcon />} />
                <CompanyServiceItem label={'QUALITY GUARANTEE'}
                                    message={'Dolor sit amet orem ipsu mcons ectetur adipi elit.'}
                                    icon={<WorkspacePremiumIcon />} />
                <CompanyServiceItem label={'DAILY OFFERS'}
                                    message={'Amet consectetur adipi elit loreme ipsum dolor sit.'}
                                    icon={<LocalOfferIcon />} />
                <CompanyServiceItem label={'100% SECURE PAYMENT'}
                                    message={'Rem Lopsum dolor sit amet, consectetur adipi elit.'}
                                    icon={<HealthAndSafetyIcon />} />
            </Box>
        </Box>
    );
};

export default CompanyService;
