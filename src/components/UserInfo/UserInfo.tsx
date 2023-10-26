import CompanyIcon from '../../assets/icon-company.svg';
import LocationIcon from '../../assets/icon-location.svg';
import TwitterIcon from '../../assets/icon-twitter.svg';
import BlogIcon from '../../assets/icon-website.svg';
import styles from './UserInfo.module.scss';
import { LocalGithubUser } from "../../types";
import {InfoItem, InfoItemProps} from "../InfoItem/InfoItem.tsx";

interface UserInfoProps extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {}

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
    const items: InfoItemProps[] = [
        {
            icon: <img src={LocationIcon} alt="Location" />,
            text: location,
        },
        {
            icon: <img src={BlogIcon} alt="Blog" />,
            text: blog,
            isLink: true,
        },
        {
            icon: <img src={TwitterIcon} alt="Twitter" />,
            text: twitter,
        },
        {
            icon: <img src={CompanyIcon} alt="Company" />,
            text: company,
        },
    ]

    return (
        <div className={styles.userInfo}>
            {items.map((item, index) => (
                <InfoItem {...item} key={index} />
            ))}
        </div>
    );
}
