import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Profile } from './components/profile/profile';
import { Portfolio } from './components/portfolio/portfolio';
import { Settings } from './components/settings/settings';
import { Changepassword } from './components/changepassword/changepassword';
import { Setting } from './components/setting/setting';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: Home,title: 'home'},
    {path:'contact', component: Contact,title: 'contact'},
    {path:'portfolio', component: Portfolio,title: 'portfolio'},
    {path:'settings', component: Settings,title: 'settings',children: [
        { path: '', redirectTo: 'setting', pathMatch: 'full' },
        {path: 'profile', component: Profile, title: 'Profile'},
        {path: 'change', component: Changepassword, title: 'Change Password'},
        {path:'setting', component: Setting, title: 'Setting'}
    ]},
    {path:'**', component: Notfound, title: 'page not found'}
];
