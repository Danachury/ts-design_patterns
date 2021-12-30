import { BlackDashboard, Dashboard, WhiteDashboard } from './dashboard'

const whiteDashboard: Dashboard = WhiteDashboard.create()
whiteDashboard.createHeader()
whiteDashboard.createBody()

const blackDashboard: Dashboard = BlackDashboard.create()
blackDashboard.createHeader()
blackDashboard.createBody()
