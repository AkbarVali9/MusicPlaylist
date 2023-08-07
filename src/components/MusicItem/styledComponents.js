import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`

export const MusicTrackImage = styled.img`
  height: 90px;
  width: 140px;
  margin-right: 20px;
`

export const NameGenreContainer = styled.div`
  font-family: 'Roboto';
`

export const Name = styled.p`
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
`

export const Genre = styled.p`
  color: #3b82f6;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
`

export const Duration = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
`
