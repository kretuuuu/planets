-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Lis 04, 2024 at 09:20 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `planets`
--
CREATE DATABASE IF NOT EXISTS `planets` DEFAULT CHARACTER SET utf8 COLLATE utf8_polish_ci;
USE `planets`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `details`
--

CREATE TABLE `details` (
  `id` int(11) NOT NULL,
  `planet_id` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `diameter` text NOT NULL,
  `mass` text NOT NULL,
  `distance_from_sun` text NOT NULL,
  `orbital_period` text NOT NULL,
  `day_len` text NOT NULL,
  `atmosphere` text NOT NULL,
  `temperature` text NOT NULL,
  `moons` text NOT NULL,
  `fun_facts` text NOT NULL,
  `language` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `details`
--

INSERT INTO `details` (`id`, `planet_id`, `position`, `diameter`, `mass`, `distance_from_sun`, `orbital_period`, `day_len`, `atmosphere`, `temperature`, `moons`, `fun_facts`, `language`) VALUES
(1, 1, 0, '~1,392,700 km', '~1.989 x 10³⁰ kg (333,000 times Earth\'s mass)', '0 km (center)', 'Not applicable', '24 to 35 days (differential rotation, faster at the equator)', 'Composed of three layers: photosphere, chromosphere, corona; composition: 73% hydrogen, 25% helium.', 'Core: ~15 million °C. Surface (photosphere): ~5,500 °C.', 'Not applicable.', 'Generates energy through nuclear fusion, converting hydrogen into helium, providing light and warmth for the entire Solar System.', 'ENG'),
(2, 2, 1, '~4,880 km', '~0.055 Earth\'s mass', '~57.9 million km', '88 Earth days', '59 Earth days', 'Very thin; composition: oxygen, sodium, hydrogen, helium', 'From -180°C to 430°C', 'None', 'Exhibits extreme temperature changes between day and night due to the lack of a protective atmosphere', 'ENG'),
(3, 3, 2, '~12,104 km', '~0.815 Earth\'s mass', '~108.2 million km', '225 Earth days', '243 Earth days (retrograde rotation)', 'Primarily carbon dioxide with traces of nitrogen', 'Average ~460°C', 'None', 'The hottest planet in the Solar System due to a strong greenhouse effect.', 'ENG'),
(4, 4, 3, '~12,742 km', '1 Earth\'s mass', '~149.6 million km', '365.25 days', '24 hours', '78% nitrogen, 21% oxygen', 'From -88°C to 58°C', '1 (the Moon)', 'The only known planet with confirmed life', 'ENG'),
(5, 5, 4, '~6,779 km', '~0.107 Earth\'s mass', '~227.9 million km', '687 Earth days', '24.6 hours', 'Primarily carbon dioxide', 'From -125°C to 20°C', '2 (Phobos and Deimos)', 'Known as the Red Planet due to iron oxide on its surface', 'ENG'),
(6, 6, 5, '~139,820 km', '~318 Earth\'s masses', '~778.5 million km', '11.9 Earth years', '9.9 hours', 'Hydrogen and helium', 'Average ~ -110°C', '79 (largest: Io, Europa, Ganymede, Callisto)', 'Famous for the Great Red Spot, a massive storm that has persisted for centuries.', 'ENG'),
(7, 7, 6, '~116,460 km', '~95 Earth\'s masses', '~1.4 billion km', '29.5 Earth years', '10.7 hours', 'Hydrogen and helium', 'Average ~ -140°C', '83 (largest: Titan)', 'Known for its extensive system of ice and rock rings.', 'ENG'),
(8, 8, 7, '~50,724 km', '~14.5 Earth\'s masses', '~2.87 billion km', '84 Earth years', '17.2 hours', 'Hydrogen, helium, methane', 'Average ~ -195°C', '27 (largest: Titania)', 'Rotates on its side with an axis tilt of 98°.\r\n', 'ENG'),
(9, 9, 8, '~49,244 km', '~17 Earth\'s masses', '~4.5 billion km', '165 Earth years', '16.1 hours', 'Hydrogen, helium, methane', 'Average ~ -200°C', '14 (largest: Triton)', 'Known for intense storms and very strong winds.', 'ENG');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `planet_list`
--

CREATE TABLE `planet_list` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `planet_list`
--

INSERT INTO `planet_list` (`id`, `name`) VALUES
(1, 'sun'),
(2, 'mercury'),
(3, 'venus'),
(4, 'earth'),
(5, 'mars'),
(6, 'jupiter'),
(7, 'saturn'),
(8, 'uranus'),
(9, 'neptune');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `planet_details` (`planet_id`);

--
-- Indeksy dla tabeli `planet_list`
--
ALTER TABLE `planet_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `details`
--
ALTER TABLE `details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `planet_list`
--
ALTER TABLE `planet_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `details`
--
ALTER TABLE `details`
  ADD CONSTRAINT `planet_details` FOREIGN KEY (`planet_id`) REFERENCES `planet_list` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
