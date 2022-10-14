export const changePublishTime = (publishAt: string): string => {
    const changedDate = publishAt.replace(/[A-Z]/g, ' ')
                                 .split(' ');
    changedDate[0] = changedDate[0].split('-').reverse().join('-');
    return changedDate.reverse()
                      .join(' ')
                      .trim();
}