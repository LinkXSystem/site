FROM linkxsystem/site:onbuild as build

FROM gatsbyjs/gatsby

LABEL maintainer="linkxsystem@gmail.com"

COPY --from=build /app/public /pub
