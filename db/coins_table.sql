--
-- Table structure for table `coins`
--

DROP TABLE IF EXISTS `coins`;
CREATE TABLE `coins` (
  `symbol` varchar(15) NOT NULL,
  `currency` varchar(3) NOT NULL,
  `quote` double NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for table `coins`
--
ALTER TABLE `coins`
  ADD KEY `symbol` (`symbol`,`currency`) USING BTREE;
