module.exports = {
    name:'dracula',
    description:'get a random lyric from the modern bohemian rhapsody',
    //deleted: boolean
    //options: array of objects
    lyrics : [
        'I’m moving different', 
        'This shit ain’t nothing to me man, I’m a dog. I’m biting the fart bubbles in the bath',
        'We smoking Symbiote',
        'Smoking that Whoopi Goldberg South Egyptian fur burger Deluxe Mega Millions scratcher skunk bubba kush',
        'We smoking dung beetle',
        'I’m on 12 vicodins, smoking on Scooby-Doo dick',
        'We smoking Sequoia banshee boogers',
        'We snorting that good Buffalo Soldier tamarind Jordanian gibbies',
        'They must have amnesia, they forgot that I’m him. That Burberry backwoods pack hitting that pussy smell like a Hellcat V8',
        'We smoking shit in a glass pipe, blowing the Lord’s bubbles',
        'I’m sick in the head',
        'I’m on them Broward county Tic-Tacs, I’m on them Georgetown Geronimoes',
        'I’m on them Nashville nibblers',
        'I left my Margiela’s in the Benz trunk, I’ll have to stunt on them next time',
        'I don’t give a fuck if I go blind, I don’t need to see the price tag anyways',
        'I’m high on 12 Jason Bournes, looking to beat the cum out of a thick, fresh oak',
        'We smoking filtered crack you stupid piece of shit, I’ll fucking kill you',
        'Call that pussy The Matrix, cause I’m in this bitch and I can’t get out',
        'Last guy who ran off on the pack got choked out by some Givenchy gloves. The last thing he ever saw was the price tag on them. Slowly faded into darkness, and I let the archangels take him. I need more Sequoia banshee boogers',
        'Don’t be shy girl, I love me some Pastrami mudflaps',
        'I’m moving like French Montana: haan',
        'Welcome to the Cream Kingdom bitch, open up. Blac Chyna, I’d drink her piss out of another man’s balls',
        'My shooter a crackhead, he look like Woody Harrelson',
        'You ain’t seen ten bands in your life, jit',
        'Reach for my neck, you’ll get turned into an example',
        'Y’all gotta stop playing with me man',
        'I threw diamonds at the strip clubs under the great pyramids. I pushed a camel through the eye of a needle. This shit ain’t nothing to me man',
        'Tied the opps to the back of a Trackhawk and dragged them around the block for 24 hours',
        'Motherfucker look like a Resident Evil 5 campaign extra after we was done with him',
        'Opps wanted some initiative, blew up their entire quadrant',
        'I’m moving like Oppenheimer',
        'She dropped that ass on me from an egregarious angle, they thought I was Stephen Wallace',
        'Top shelf zaza, disrupted my circadian rhythm',
        'I have seen the Magna Carta, I have the seen the eye of horror',
        'I was flipping bricks for Mansa Musa before y’all even became a type I civilization',
        'This shit ain’t nothing to me you stupid piece of shit',
        'Step the wrong way and you will perish',
        'That pussy feel like Biscoff Butter',
        'You think I care about this shit? Ask me if I care about this shit, cause I don’t give a shit',
        'If I had a dollar for every time they said I gave a shit, I’d be broke cause I don’t give a shit',
        'My bitch look like David Hasselhoff',
        'I balled so hard they thought I was a fucking nutsack',
        'This shit ain’t nothing to me man, I’ll kill you, you stupid piece of shit'
    ],
    callback: (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'dracula') {
            return interaction.reply(module.exports.lyrics[Math.floor(Math.random() * module.exports.lyrics.length)]);
        }
    }
}