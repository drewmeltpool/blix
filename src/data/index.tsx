import { IAlbum } from 'src/types';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import song from 'src/assets/songs/track.mp3';

export const music: IAlbum[] = [
  {
    id: 0,
    image:
      'data:image/jpeg;base64,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',
    author: 'Yanix',
    name: 'SS 20',
    tracks: [
      {
        id: 0,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 1,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 2,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 3,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
    ],
  },
  {
    id: 1,
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw0NDQ0NDQ4NDQ4NDQ0NDQ8ODQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGislHSUvLS8tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0rNy0tLS0tKy0tMTctN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQYHAwQFAgj/xABGEAACAgEBBAcEBgQMBwEAAAAAAQIDEQQFEiExBgcTIkFRcWGBkaEUMlKiscEjQoLCJCUzNWJjcnSSsrPRNENTZHOToxX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAMAAgIDAQEAAAAAAAAAAQIDETEyIUESIlFhE//aAAwDAQACEQMRAD8Ay0oIee7QpAABSAACgQpCgCAACgAQFIAKCAUAgApCgAQACkAAAoAAgAFAAgAAFAAEAApCgQoAAAACFIBQAAICgQAoEKQACkKABAABSACggFAAAEKBCkKBCgADobZ2vTpK1Zc5NzluVVVxc7rrPCEIrm/kdy+2NcJ2TeIQjKcn5RSy2Yh0K1tV2p1+09XPd7Cqrs3Y3JUQtlPhBeD3YwXBeL83m0nUWvW1O29QlGVWzNVOLw5O2dNElHHhFttv2PB29mbYr1DcN2ym6K3pUXJRs3fNYbUl7U3jKzg8Ha/WHs7OK3qLU/11RKEPdv4b+BiW2OltU7K5aem6Mq5Katc41WRkuUoLj7Vx4PimmsonHDK/RcsZ9tuAxTod0wevnKizT9lbXT2spxk5QniUYt43e7ly5ZfJmVlbLLykvQAhCQoIAKQoEBQAIUACAAUgAAFIBSAACkKABABQAB4vTKxx0GqcU33Ip48IucU36JZbNfdH9Ldqb/o9Wl7bMI2TTm4Uymq92LsfJxjvSaS4ve8jausrU6rYOO+p1zi4ct5OLWDFOiem+hbS1OnUu5Hs5QaUlCyDcoyazz3XZBPj+qXxy5LEfj29Ypr+rraVUu9KncWO9GybaXtW7xZ6HTXZVUtPs+mMbFdpaVp+3de7C3dS3uHis/rcs8sm3dXhrvcUuPqa16ZXamU1v3RrTw4UU1uyMIp87J8M5fh6D/plbFsdeNldPq82b9Eu7SU23qd/TYxhKSrV0Me6F33TYphGx7O44rO/G/Z9sXHxX0jcm17N2Tz7JGbkZXvyrJz4gACqQAAQAoEKCAAAAKQoAhQBACgQAoAgKBCgAAABw6yjtK7Kt+dfaQlDtK2lOGVjei34mJ7WjfLVaOO7bDT6K6nSR1dsW7bp2pRln7dbzGO955ZmRx3Uxnu7yzuzjZHi13o8mTKh1NpbUuoW5OmU8LCmmsSMV21ta2/9G12UVzjH6zftZnl7jNRk8SWH5NZME6R0xjfvrhvLl5FGke70c0EIwpvjKTk6rYSXDdbnOGc+nZJL1Z7ZrWvpjboLKK7K42aOa77SfbVycuLi84fnhrz4mxdJqYWwhbVONldkVKE4vMZI0svOs+zrlABVIAAAAAEKQAAAABQABAAKQACgAAAAAAAHjbe6SafR92bdlzWVTXhyx4OT5RXqTJb4Rbx7Jh3SvpbGMZ6bRy37X3bL4Pu0rxUX4yx5cvXgYht7pdq9XmtSVNM+Cpqz315znzkvZwT8jo6SUY93xfnzZvhq+6xy2fxszoNru20Ea/19Nbbp5L2KTlB/4ZJe5nnbb007rZbkW9yLzw8Ed3qbvinrtNOScpTjfGLxjDzF4+C+JsSzR0p7yjCD45cYxTfq/Erlp7exfHdycsaL2p0c1N9bnGHCEJWZlw7qWXjz5GN7D6SavQ5+jW4g3vSpsip1SfnjwftTRvnpVWoaPWzrjjGlvcpvm+4+bfF+i4H5y5vh7jbDDk5WWefb1srZnWjB4Wr0s4Pk56eSnH13ZYa+LMv2R0i0er4abUQnL/pSzXav2JYfwNERhxSPmxbrWM5WGmnhp+DTK3TjfCZtv2/RwMR6tdtWarSThfN2W6Wzs3OTzOdTWYOT8X9ZZ8d0y45spy8by9nQAEJACAUhSAAABSFAEKABAAABSAUAADUW3J9rqdRKWU52TfPnDeaj91I27k0xrL+0lKed1WWSdb8VXnC+OPkb6Ptjt+nUrpy3Lxx4+C8EfWni+0WeKSbfsfL4cX8DuRq3Vjm+eeOWzrxeJ5fuOhiynoLqux2jS/CyMoP8vxNyuRoPSahwv09i4Yn+Tf5G8NBqVZGLXjHe92CEvJ6wLdzZe0Jf9tOPvliP5n5vXM/QvWfZ/E2tfmqo/G6CPzzkmIqylmTZJPjk+V6hkoZ11S63c1t1DfDUadte2yuSa+7KZtk0F0V1vYa/R3ZwlqIQl/Yn3JfKTN+nLun7ddGq/AADFqEKQAAAABQBCkAFIABQQAAAKAAOrtSxQ0+om3uqNFr3vLEHxNGa+2ThGXGKl9SPLdrSxH5YNw9NJfwDURzuq1Rqk/KuUlv/AHd401ta7e3ZYwnnC8o8l8jp0z4YbfLmntKUqa473fk3GcvHdRz224hF8eD7rfjg8anl+0z0r7HKPHGF4R5L0NmT1K7lKNMk+VkOHll7v5m1+gmvck65PjXBr3eBpbSzxW1/WVv070TY3QTVYut4860l8SKmeHs9Z12dj6mPnZT8Fan+RoaTN19Ydyezb/GKnU36OeF82jSTJiK+0njlw8z5ZzR1DUNzEX3XBSeW4wclJpccLivmzhkShfl7T9D7H1XbabS3+N2nptfrKCb+bPzwjeXQC/tNmaJ/YrlU/wBiyUfwSMN8+I21X5ZCADmboUAACACkKQCkKQACkAoAAhQAAAAxfrE1EIaSEbM7t2prq4f2Zy+HdNQ7VsUpvdworgkuWDafWnVvaOh/Y1kJP/1WL8zU2qXE69Pq5tvl9aK3d8E8+eMo7VihudyTbl9ZNYUX5HBVoJOCsTju4zz5eok215v1yaKO5p3uQWcPesgvRZ5/Iy/o/e4S3lw3uHuMU0OmXZTk+cpQjH48fkZPs9Y3fZgrVsXr9O7/AOLLo+Mnp/8AWgakZsvprLOht9af9WBrRlorREZ9FcFub2eKnutexrKfyl8iUPlG5+q6WdmVr7N+oj9/P5mmoG2+qSzOhuj9jVz+ddbMt3q01ezNwAcjpQpCgQFIBSAAAAABQBCgAAAAAAGDda2pap0lMfrWXTsS81CG7+NiNV31y45WePNcVk2H1pzT1Oli5yj2enlNbvF5nY0+H7CMD1l7ccclyXdw2vNnZqn6ubZ7OfRPchCak+8sSj7fNeXA5Xs+b7ySjnmvzwcdGkeEsp4WGozw/gzv6OE+MnJuEM4UmvPxLqFrUXTTHOYvvcMZk+b9vl7mZBpFjdS9h4Gjp3rs97urlJ53cvhhmR0LDXqUyvyvjPh99Mo/wKxeag/hOLNaM2ftuvtdPZW+bhLHrhmsC8VqHLTQ5wukn/IxjZJecXNQz7nJHEd/Yc8Xqvw1Fd2lfDn2tcox+84v3E1V0o8jaHU9L9DrY+Cuql8YNfumrovgn7DZfU7J/wAPj4L6M16vtF+SM9vq01+zY5QQ43SpCkApCkAAACgEAFIAAKQAUhQAAA1Z1malraFcfCOjq+Lssf8AsYjq7FOdMcvDksvnjj4GRdZGHtK1t8Y1UR924n+LZiV77yx4LgduHrHJn5r0a9LNPMpLnzzlvidvV6hxXZwWZyw3w48uGfaectfY1jhn7WO8ccbJLPHnnOccfeyyGRbDhiEpPi5SfH2Lh+OT2qVyPF2XGShBcsLOPXiexp4ttJcWzK+Ws8PRhGMa56m5/o61wX2n4I1TclvSwsLelheSzwRtra0YdhChrey1JxX6zRrTpDpnVqbIuCrUlGyMFyUWsfimaYqZPMPquxwlGcXiUJRnF+Uk8p/FEPlllHJN5baSim21FcorPJGzOp2P6PXPx7She5Rl/uaxRtDqef6LXL+tpf3ZGe31aa/ZsMhSHG6QoAEAAAFAEAAAAoAEAApCgAABpvrFl/Geo9kdOv8A5RMUtfeMt6ymv/07uXGmhv13PH28DEZ80duHrHJn5rkrZ2qIOUoQ4d6SXHmuPE6SOarVOqUZxUW1nClnHL2FkM50um4eB6ejqUXnyMGr6VWx/wCTU/fNfmc8Omdy5UU++UzP8a0/KM91M2sOMcya4ewwjpvobF2OpsX1s1N+3jKP7x8S6c6rhu1aaOPOE5fvHn7U6TarVV9jc6uzbi8QqUWmnlNPiy0lVtjyD5Z9nzIuqqNm9Ts1u66Oe9vUSx/Rams/FM1zbo7YNKdVkG1ylCSfwM76n21frYvhmil8efCcv9zPZ841fDsyjaIBDjdIUhQAAAAhQBAAKQFAhSFAEKQCghQMD6UdC3qdVdq5avd7Ts1GpU7ziowUcb297G+Rh0Oi0rNRXTXdmM9QtP2zg8KW65ZxnisJ+PgbY27VLdVkW1uxmpY5Y3W0/ivmeP0cjVfpNI9NLenptTXK7hhwt396xPP9GTw+OeBrNmULrws/1p+6G5KcJcJVzlCXP60W0/wOCTyeht6GNXrIvw1epXwukee0dUcdQIBslCgBAUyDoBOtbS0quhXOM3OEVZGMoxtcW4SWeT3kkn5sx/JyabUSqsruh9emyFsP7cZKS+aIs7Ey8rP+lGY61qTi5Sus7vDKhJNptf4WZx0W0PZaaEpRSstSslw4pNd2Pwx8WeDsnoyr9ZZtG2av0+o7PU0uSina5wTjFxXKMU0uPF4M1OLL+O3vYoIUqhCkKBAAABQBAUAQAAUAAQpABQQoHxfUpxlCSzGUXF+jPI6L7E+hV2wc3J2Wym1vN1pbzUWk1wbju59D2iAaK6ccNp69f1/7kTwpHs9L5Z2hr2+f0u6PLHCMt1fJI8Zndj4jkvl8m3+rno/VHZ6svprsnrN+yXaQjJ9g1uxhl+DSz+0ajqqc5Rguc5RgvWTSX4n6PppjXGFcFiNcYwil4RisJfBGe7Lk4vqnb1orpnsL6Bq50xz2M0rdO5PL7N/qt+LTTXw8zxDcnWZsX6To+2hHN2jbtWFxlS1+kj8Epfs+004W15flirnjyoQ+sEaNFG3OqfaUrdJZRNp/RLVGvzVU1vJP3qWDNzUfVJqpR1ttK+pdppSmv6Vcluv78l7zbZx7ZzJ1a73FQAZroUgAAoAhSACkAAoIAKAAAZABQQAUgAGiemf85bQ/vMv8qPDAO7Hw5L5djZf/ABGm/vFH+pE/Rb5+8Aw3+Y10/bi1X8nZ/wCOf+Vn5whyXoignR9o2/SoTAOhky3qr/nGP92v/GJuUA5N3s6NXqAgMmigAACAAUgAAAD/2Q==',
    author: 'Yanix',
    name: 'SS 20',
    tracks: [
      {
        id: 0,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 1,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 2,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 3,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
    ],
  },
  {
    id: 2,
    image:
      'data:image/jpeg;base64,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',
    author: 'Yanix',
    name: 'SS 20',
    tracks: [
      {
        id: 0,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 1,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 2,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 3,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
    ],
  },
  {
    id: 3,
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw0NDQ0NDQ4NDQ4NDQ0NDQ8ODQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGislHSUvLS8tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0rNy0tLS0tKy0tMTctN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQYHAwQFAgj/xABGEAACAgEBBAcEBgQMBwEAAAAAAQIDEQQFEiExBgcTIkFRcWGBkaEUMlKiscEjQoLCJCUzNWJjcnSSsrPRNENTZHOToxX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAMAAgIDAQEAAAAAAAAAAQIDETEyIUESIlFhE//aAAwDAQACEQMRAD8Ay0oIee7QpAABSAACgQpCgCAACgAQFIAKCAUAgApCgAQACkAAAoAAgAFAAgAAFAAEAApCgQoAAAACFIBQAAICgQAoEKQACkKABAABSACggFAAAEKBCkKBCgADobZ2vTpK1Zc5NzluVVVxc7rrPCEIrm/kdy+2NcJ2TeIQjKcn5RSy2Yh0K1tV2p1+09XPd7Cqrs3Y3JUQtlPhBeD3YwXBeL83m0nUWvW1O29QlGVWzNVOLw5O2dNElHHhFttv2PB29mbYr1DcN2ym6K3pUXJRs3fNYbUl7U3jKzg8Ha/WHs7OK3qLU/11RKEPdv4b+BiW2OltU7K5aem6Mq5Katc41WRkuUoLj7Vx4PimmsonHDK/RcsZ9tuAxTod0wevnKizT9lbXT2spxk5QniUYt43e7ly5ZfJmVlbLLykvQAhCQoIAKQoEBQAIUACAAUgAAFIBSAACkKABABQAB4vTKxx0GqcU33Ip48IucU36JZbNfdH9Ldqb/o9Wl7bMI2TTm4Uymq92LsfJxjvSaS4ve8jausrU6rYOO+p1zi4ct5OLWDFOiem+hbS1OnUu5Hs5QaUlCyDcoyazz3XZBPj+qXxy5LEfj29Ypr+rraVUu9KncWO9GybaXtW7xZ6HTXZVUtPs+mMbFdpaVp+3de7C3dS3uHis/rcs8sm3dXhrvcUuPqa16ZXamU1v3RrTw4UU1uyMIp87J8M5fh6D/plbFsdeNldPq82b9Eu7SU23qd/TYxhKSrV0Me6F33TYphGx7O44rO/G/Z9sXHxX0jcm17N2Tz7JGbkZXvyrJz4gACqQAAQAoEKCAAAAKQoAhQBACgQAoAgKBCgAAABw6yjtK7Kt+dfaQlDtK2lOGVjei34mJ7WjfLVaOO7bDT6K6nSR1dsW7bp2pRln7dbzGO955ZmRx3Uxnu7yzuzjZHi13o8mTKh1NpbUuoW5OmU8LCmmsSMV21ta2/9G12UVzjH6zftZnl7jNRk8SWH5NZME6R0xjfvrhvLl5FGke70c0EIwpvjKTk6rYSXDdbnOGc+nZJL1Z7ZrWvpjboLKK7K42aOa77SfbVycuLi84fnhrz4mxdJqYWwhbVONldkVKE4vMZI0svOs+zrlABVIAAAAAEKQAAAABQABAAKQACgAAAAAAAHjbe6SafR92bdlzWVTXhyx4OT5RXqTJb4Rbx7Jh3SvpbGMZ6bRy37X3bL4Pu0rxUX4yx5cvXgYht7pdq9XmtSVNM+Cpqz315znzkvZwT8jo6SUY93xfnzZvhq+6xy2fxszoNru20Ea/19Nbbp5L2KTlB/4ZJe5nnbb007rZbkW9yLzw8Ed3qbvinrtNOScpTjfGLxjDzF4+C+JsSzR0p7yjCD45cYxTfq/Erlp7exfHdycsaL2p0c1N9bnGHCEJWZlw7qWXjz5GN7D6SavQ5+jW4g3vSpsip1SfnjwftTRvnpVWoaPWzrjjGlvcpvm+4+bfF+i4H5y5vh7jbDDk5WWefb1srZnWjB4Wr0s4Pk56eSnH13ZYa+LMv2R0i0er4abUQnL/pSzXav2JYfwNERhxSPmxbrWM5WGmnhp+DTK3TjfCZtv2/RwMR6tdtWarSThfN2W6Wzs3OTzOdTWYOT8X9ZZ8d0y45spy8by9nQAEJACAUhSAAABSFAEKABAAABSAUAADUW3J9rqdRKWU52TfPnDeaj91I27k0xrL+0lKed1WWSdb8VXnC+OPkb6Ptjt+nUrpy3Lxx4+C8EfWni+0WeKSbfsfL4cX8DuRq3Vjm+eeOWzrxeJ5fuOhiynoLqux2jS/CyMoP8vxNyuRoPSahwv09i4Yn+Tf5G8NBqVZGLXjHe92CEvJ6wLdzZe0Jf9tOPvliP5n5vXM/QvWfZ/E2tfmqo/G6CPzzkmIqylmTZJPjk+V6hkoZ11S63c1t1DfDUadte2yuSa+7KZtk0F0V1vYa/R3ZwlqIQl/Yn3JfKTN+nLun7ddGq/AADFqEKQAAAABQBCkAFIABQQAAAKAAOrtSxQ0+om3uqNFr3vLEHxNGa+2ThGXGKl9SPLdrSxH5YNw9NJfwDURzuq1Rqk/KuUlv/AHd401ta7e3ZYwnnC8o8l8jp0z4YbfLmntKUqa473fk3GcvHdRz224hF8eD7rfjg8anl+0z0r7HKPHGF4R5L0NmT1K7lKNMk+VkOHll7v5m1+gmvck65PjXBr3eBpbSzxW1/WVv070TY3QTVYut4860l8SKmeHs9Z12dj6mPnZT8Fan+RoaTN19Ydyezb/GKnU36OeF82jSTJiK+0njlw8z5ZzR1DUNzEX3XBSeW4wclJpccLivmzhkShfl7T9D7H1XbabS3+N2nptfrKCb+bPzwjeXQC/tNmaJ/YrlU/wBiyUfwSMN8+I21X5ZCADmboUAACACkKQCkKQACkAoAAhQAAAAxfrE1EIaSEbM7t2prq4f2Zy+HdNQ7VsUpvdworgkuWDafWnVvaOh/Y1kJP/1WL8zU2qXE69Pq5tvl9aK3d8E8+eMo7VihudyTbl9ZNYUX5HBVoJOCsTju4zz5eok215v1yaKO5p3uQWcPesgvRZ5/Iy/o/e4S3lw3uHuMU0OmXZTk+cpQjH48fkZPs9Y3fZgrVsXr9O7/AOLLo+Mnp/8AWgakZsvprLOht9af9WBrRlorREZ9FcFub2eKnutexrKfyl8iUPlG5+q6WdmVr7N+oj9/P5mmoG2+qSzOhuj9jVz+ddbMt3q01ezNwAcjpQpCgQFIBSAAAAABQBCgAAAAAAGDda2pap0lMfrWXTsS81CG7+NiNV31y45WePNcVk2H1pzT1Oli5yj2enlNbvF5nY0+H7CMD1l7ccclyXdw2vNnZqn6ubZ7OfRPchCak+8sSj7fNeXA5Xs+b7ySjnmvzwcdGkeEsp4WGozw/gzv6OE+MnJuEM4UmvPxLqFrUXTTHOYvvcMZk+b9vl7mZBpFjdS9h4Gjp3rs97urlJ53cvhhmR0LDXqUyvyvjPh99Mo/wKxeag/hOLNaM2ftuvtdPZW+bhLHrhmsC8VqHLTQ5wukn/IxjZJecXNQz7nJHEd/Yc8Xqvw1Fd2lfDn2tcox+84v3E1V0o8jaHU9L9DrY+Cuql8YNfumrovgn7DZfU7J/wAPj4L6M16vtF+SM9vq01+zY5QQ43SpCkApCkAAACgEAFIAAKQAUhQAAA1Z1malraFcfCOjq+Lssf8AsYjq7FOdMcvDksvnjj4GRdZGHtK1t8Y1UR924n+LZiV77yx4LgduHrHJn5r0a9LNPMpLnzzlvidvV6hxXZwWZyw3w48uGfaectfY1jhn7WO8ccbJLPHnnOccfeyyGRbDhiEpPi5SfH2Lh+OT2qVyPF2XGShBcsLOPXiexp4ttJcWzK+Ws8PRhGMa56m5/o61wX2n4I1TclvSwsLelheSzwRtra0YdhChrey1JxX6zRrTpDpnVqbIuCrUlGyMFyUWsfimaYqZPMPquxwlGcXiUJRnF+Uk8p/FEPlllHJN5baSim21FcorPJGzOp2P6PXPx7She5Rl/uaxRtDqef6LXL+tpf3ZGe31aa/ZsMhSHG6QoAEAAAFAEAAAAoAEAApCgAABpvrFl/Geo9kdOv8A5RMUtfeMt6ymv/07uXGmhv13PH28DEZ80duHrHJn5rkrZ2qIOUoQ4d6SXHmuPE6SOarVOqUZxUW1nClnHL2FkM50um4eB6ejqUXnyMGr6VWx/wCTU/fNfmc8Omdy5UU++UzP8a0/KM91M2sOMcya4ewwjpvobF2OpsX1s1N+3jKP7x8S6c6rhu1aaOPOE5fvHn7U6TarVV9jc6uzbi8QqUWmnlNPiy0lVtjyD5Z9nzIuqqNm9Ts1u66Oe9vUSx/Rams/FM1zbo7YNKdVkG1ylCSfwM76n21frYvhmil8efCcv9zPZ841fDsyjaIBDjdIUhQAAAAhQBAAKQFAhSFAEKQCghQMD6UdC3qdVdq5avd7Ts1GpU7ziowUcb297G+Rh0Oi0rNRXTXdmM9QtP2zg8KW65ZxnisJ+PgbY27VLdVkW1uxmpY5Y3W0/ivmeP0cjVfpNI9NLenptTXK7hhwt396xPP9GTw+OeBrNmULrws/1p+6G5KcJcJVzlCXP60W0/wOCTyeht6GNXrIvw1epXwukee0dUcdQIBslCgBAUyDoBOtbS0quhXOM3OEVZGMoxtcW4SWeT3kkn5sx/JyabUSqsruh9emyFsP7cZKS+aIs7Ey8rP+lGY61qTi5Sus7vDKhJNptf4WZx0W0PZaaEpRSstSslw4pNd2Pwx8WeDsnoyr9ZZtG2av0+o7PU0uSina5wTjFxXKMU0uPF4M1OLL+O3vYoIUqhCkKBAAABQBAUAQAAUAAQpABQQoHxfUpxlCSzGUXF+jPI6L7E+hV2wc3J2Wym1vN1pbzUWk1wbju59D2iAaK6ccNp69f1/7kTwpHs9L5Z2hr2+f0u6PLHCMt1fJI8Zndj4jkvl8m3+rno/VHZ6svprsnrN+yXaQjJ9g1uxhl+DSz+0ajqqc5Rguc5RgvWTSX4n6PppjXGFcFiNcYwil4RisJfBGe7Lk4vqnb1orpnsL6Bq50xz2M0rdO5PL7N/qt+LTTXw8zxDcnWZsX6To+2hHN2jbtWFxlS1+kj8Epfs+004W15flirnjyoQ+sEaNFG3OqfaUrdJZRNp/RLVGvzVU1vJP3qWDNzUfVJqpR1ttK+pdppSmv6Vcluv78l7zbZx7ZzJ1a73FQAZroUgAAoAhSACkAAoIAKAAAZABQQAUgAGiemf85bQ/vMv8qPDAO7Hw5L5djZf/ABGm/vFH+pE/Rb5+8Aw3+Y10/bi1X8nZ/wCOf+Vn5whyXoignR9o2/SoTAOhky3qr/nGP92v/GJuUA5N3s6NXqAgMmigAACAAUgAAAD/2Q==',
    author: 'Yanix',
    name: 'SS 20',
    tracks: [
      {
        id: 0,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 1,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 2,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
      {
        id: 3,
        name: 'Hard to Buff (feat. GONE.Fludd)',
        author: 'Yanix',
        description: 'Album • Yanix • 2020',
        duration: '22 min',
        song,
      },
    ],
  },
];
