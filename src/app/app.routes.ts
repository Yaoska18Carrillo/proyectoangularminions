import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { MinionsComponent } from "./minions/minions.component";
import { MinionComponent } from "./minion/minion.component";
//esta linea define la constante con las routas del navbar
const routes: Routes=[
    {path: 'home', component : HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'minions', component: MinionsComponent},
    { path: 'minion/:id', component: MinionComponent},
    {path: '**', pathMatch:'full',redirectTo:'home'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
