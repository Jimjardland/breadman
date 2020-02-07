import request from 'request'
import { getSeason } from './utils/timeHelper'

export default () => {
  const season = getSeason()
  const url = `https://statsapi.web.nhl.com/api/v1/standings/wildCardWithLeaders?season=${season}`

  const setPointPercantage = teamRecords => {
    for (var i = 0; i < teamRecords.length; i++) {
      teamRecords[i].pointPercentage = (
        teamRecords[i].points /
        (teamRecords[i].gamesPlayed * 2)
      ).toFixed(3)
    }
    return teamRecords
  }

  const formatWildCard = ({ records }) => {
    const container = {
      eastern: [],
      western: []
    }

    for (var i = 0; i < records.length; i++) {
      var curr = records[i]
      var obj = {
        conference: curr.conference.name.toLowerCase(),
        type: curr.standingsType,
        teams: setPointPercantage(curr.teamRecords)
      }

      if (curr.division) {
        obj.division = curr.division.name
      } else {
        obj.division = 'Wild Card'
      }

      container[obj.conference].push(obj)
      container[obj.conference].sort((a, b) => {
        if (a.division > b.division) return 1
        if (a.division < b.division) return -1
        return 0
      })
    }

    return container
  }

  const promise = new Promise((resolve, reject) => {
    try {
      request(url, (err, resp, body) => {
        resolve(formatWildCard(JSON.parse(body)))
      })
    } catch (err) {
      reject()
      console.log(err)
    }
  })

  return promise
}
