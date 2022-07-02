-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 18, 2022 at 01:56 PM
-- Server version: 5.7.36
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `exams`
--

DROP TABLE IF EXISTS `exams`;
CREATE TABLE IF NOT EXISTS `exams` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `modelquestions` json NOT NULL,
  `exam_type` enum('MCQ','Written') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `exams`
--

INSERT INTO `exams` (`id`, `subject_id`, `modelquestions`, `exam_type`) VALUES
(80, 1, '[[{\"id\": 111, \"text\": \"hello?\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"hello?\", \"hiii\"], \"subject_title\": \"Math\", \"correct_answer\": \"hiii\", \"difficulty_level\": 0}, {\"id\": 137, \"text\": \"vbnvbn\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"rrrr\", \"ggggggggg\"], \"subject_title\": \"Math\", \"correct_answer\": \"ggggggggg\", \"difficulty_level\": 0}, {\"id\": 119, \"text\": \"qweeeee\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"gggg\", \"rrrrrrrrrrr\"], \"subject_title\": \"Math\", \"correct_answer\": \"rrrrrrrrrrr\", \"difficulty_level\": 1}, {\"id\": 132, \"text\": \"ttttt\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"nbnvbnvbn\", \"kjjjjjjjjjjjj\"], \"subject_title\": \"Math\", \"correct_answer\": \"kjjjjjjjjjjjj\", \"difficulty_level\": 1}, {\"id\": 113, \"text\": \"hello?\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"hello?\", \"ssssssssssss\"], \"subject_title\": \"Math\", \"correct_answer\": \"ssssssssssss\", \"difficulty_level\": 2}, {\"id\": 129, \"text\": \"vxcvxcvxc\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"xcvxcvxcv\", \"gggggggggg\"], \"subject_title\": \"Math\", \"correct_answer\": \"gggggggggg\", \"difficulty_level\": 2}]]', 'MCQ'),
(79, 1, '[[{\"id\": 116, \"text\": \"qweeeee\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"wwwwwzxxxxx\", \"assssssss\"], \"subject_title\": \"Math\", \"correct_answer\": \"assssssss\", \"difficulty_level\": 0}, {\"id\": 137, \"text\": \"vbnvbn\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"rrrr\", \"ggggggggg\"], \"subject_title\": \"Math\", \"correct_answer\": \"ggggggggg\", \"difficulty_level\": 0}, {\"id\": 119, \"text\": \"qweeeee\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"gggg\", \"rrrrrrrrrrr\"], \"subject_title\": \"Math\", \"correct_answer\": \"rrrrrrrrrrr\", \"difficulty_level\": 1}, {\"id\": 133, \"text\": \"vbnvbn\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"mmmmmmm\", \"jjjjjjjjjjjj\"], \"subject_title\": \"Math\", \"correct_answer\": \"jjjjjjjjjjjj\", \"difficulty_level\": 1}, {\"id\": 124, \"text\": \"zxzxc\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"wwwwwwwwwwww\", \"eeeeeeeeeee\"], \"subject_title\": \"Math\", \"correct_answer\": \"eeeeeeeeeee\", \"difficulty_level\": 2}, {\"id\": 130, \"text\": \"vxcvxcvxc\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"xcvxcvxcv\", \"bbbbbbbbbbbb\"], \"subject_title\": \"Math\", \"correct_answer\": \"bbbbbbbbbbbb\", \"difficulty_level\": 2}]]', 'MCQ'),
(77, 1, '[[{\"id\": 114, \"text\": \"7mada\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"asdasd\", \"ssssssssssss\"], \"subject_title\": \"Math\", \"correct_answer\": \"ssssssssssss\", \"difficulty_level\": 0}, {\"id\": 137, \"text\": \"vbnvbn\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"rrrr\", \"ggggggggg\"], \"subject_title\": \"Math\", \"correct_answer\": \"ggggggggg\", \"difficulty_level\": 0}, {\"id\": 112, \"text\": \"hello?\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"hello?\", \"asdasd\"], \"subject_title\": \"Math\", \"correct_answer\": \"asdasd\", \"difficulty_level\": 1}, {\"id\": 131, \"text\": \"qweqwe\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"vvvvvvvv\", \"hhhhhhhhhhhhhh\"], \"subject_title\": \"Math\", \"correct_answer\": \"hhhhhhhhhhhhhh\", \"difficulty_level\": 1}, {\"id\": 121, \"text\": \"qweeeee\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"gggg\", \"fffffffff\"], \"subject_title\": \"Math\", \"correct_answer\": \"fffffffff\", \"difficulty_level\": 2}, {\"id\": 127, \"text\": \"zxczxc\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"asdasd\", \"fddfdf\"], \"subject_title\": \"Math\", \"correct_answer\": \"fddfdf\", \"difficulty_level\": 2}]]', 'MCQ'),
(78, 1, '[[{\"id\": 111, \"text\": \"hello?\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"hello?\", \"hiii\"], \"subject_title\": \"Math\", \"correct_answer\": \"hiii\", \"difficulty_level\": 0}, {\"id\": 135, \"text\": \"vbnvbn\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"132131321\", \"zxczxczxc\"], \"subject_title\": \"Math\", \"correct_answer\": \"zxczxczxc\", \"difficulty_level\": 0}, {\"id\": 118, \"text\": \"qweeeee\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"qweqzxczzc\", \"vvvvvv\"], \"subject_title\": \"Math\", \"correct_answer\": \"vvvvvv\", \"difficulty_level\": 1}, {\"id\": 132, \"text\": \"ttttt\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"nbnvbnvbn\", \"kjjjjjjjjjjjj\"], \"subject_title\": \"Math\", \"correct_answer\": \"kjjjjjjjjjjjj\", \"difficulty_level\": 1}, {\"id\": 123, \"text\": \"qweeeee\", \"type\": \"mcq\", \"chapter\": 1, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"wwwwwwwwwwww\", \"eeeeeeeeeee\"], \"subject_title\": \"Math\", \"correct_answer\": \"eeeeeeeeeee\", \"difficulty_level\": 2}, {\"id\": 127, \"text\": \"zxczxc\", \"type\": \"mcq\", \"chapter\": 2, \"duration\": 1, \"subject_id\": 1, \"mcq_answers\": [\"asdasd\", \"fddfdf\"], \"subject_title\": \"Math\", \"correct_answer\": \"fddfdf\", \"difficulty_level\": 2}]]', 'MCQ');

-- --------------------------------------------------------

--
-- Table structure for table `exams_temps`
--

DROP TABLE IF EXISTS `exams_temps`;
CREATE TABLE IF NOT EXISTS `exams_temps` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `modelquestions` json NOT NULL,
  `exam_type` enum('MCQ','Written') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=97 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_04_02_184415_create_supervisors_table', 1),
(6, '2022_04_02_190020_create_students_table', 1),
(7, '2022_04_02_190234_create_subjects_table', 1),
(8, '2022_04_02_190330_create_system_managers_table', 1),
(9, '2022_04_02_190517_create_proctors_table', 1),
(10, '2022_04_02_194553_create_professors_table', 1),
(11, '2022_04_05_142800_create_questions_table', 1),
(12, '2022_04_05_142839_create_exams_table', 1),
(13, '2022_04_05_142853_create_student_exams_table', 1),
(14, '2022_04_05_142943_create_student_subjects_table', 1),
(15, '2022_04_28_234325_create_professor_subjects_table', 1),
(16, '2022_05_08_220608_create_subject_proctors_table', 1),
(17, '2022_05_15_133259_create_exams_temp_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `proctors`
--

DROP TABLE IF EXISTS `proctors`;
CREATE TABLE IF NOT EXISTS `proctors` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `proctors`
--

INSERT INTO `proctors` (`id`, `email`, `username`, `password`, `created_at`, `updated_at`) VALUES
(1, 'tonyfayez@gmail.com', '7mada', '123456789', '2022-05-11 19:18:19', '2022-05-11 19:18:19'),
(2, 'ahmed@gmail.com', '7mada123123132', '123456789', '2022-05-11 19:18:19', '2022-05-11 19:18:19');

-- --------------------------------------------------------

--
-- Table structure for table `proctor_subject`
--

DROP TABLE IF EXISTS `proctor_subject`;
CREATE TABLE IF NOT EXISTS `proctor_subject` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `proctor_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `proctor_subject`
--

INSERT INTO `proctor_subject` (`id`, `subject_id`, `proctor_id`) VALUES
(3, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `professors`
--

DROP TABLE IF EXISTS `professors`;
CREATE TABLE IF NOT EXISTS `professors` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `professors`
--

INSERT INTO `professors` (`id`, `username`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'ahmed', 'ahmed@gmail.com', '123456789', '2022-05-11 19:18:19', '2022-05-11 19:18:19'),
(2, 'tony', 'tonyfayez@gmail.com', '123456789', '2022-05-11 19:18:19', '2022-05-11 19:18:19');

-- --------------------------------------------------------

--
-- Table structure for table `professor_subject`
--

DROP TABLE IF EXISTS `professor_subject`;
CREATE TABLE IF NOT EXISTS `professor_subject` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `professor_id` bigint(20) UNSIGNED NOT NULL,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `professor_subject`
--

INSERT INTO `professor_subject` (`id`, `professor_id`, `subject_id`, `created_at`, `updated_at`) VALUES
(1, 2, 1, NULL, NULL),
(2, 2, 2, NULL, NULL),
(3, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
CREATE TABLE IF NOT EXISTS `questions` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `text` varchar(255) NOT NULL,
  `mcq_answers` varchar(255) DEFAULT NULL,
  `difficulty_level` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `chapter` int(11) NOT NULL,
  `correct_answer` varchar(255) DEFAULT NULL,
  `type` enum('mcq','written') NOT NULL,
  `subject_title` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=138 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `subject_id`, `text`, `mcq_answers`, `difficulty_level`, `duration`, `chapter`, `correct_answer`, `type`, `subject_title`) VALUES
(133, 1, 'vbnvbn', '[\"mmmmmmm\",\"jjjjjjjjjjjj\"]', 1, 1, 2, 'jjjjjjjjjjjj', 'mcq', 'Math'),
(132, 1, 'ttttt', '[\"nbnvbnvbn\",\"kjjjjjjjjjjjj\"]', 1, 1, 2, 'kjjjjjjjjjjjj', 'mcq', 'Math'),
(131, 1, 'qweqwe', '[\"vvvvvvvv\",\"hhhhhhhhhhhhhh\"]', 1, 1, 2, 'hhhhhhhhhhhhhh', 'mcq', 'Math'),
(130, 1, 'vxcvxcvxc', '[\"xcvxcvxcv\",\"bbbbbbbbbbbb\"]', 2, 1, 2, 'bbbbbbbbbbbb', 'mcq', 'Math'),
(129, 1, 'vxcvxcvxc', '[\"xcvxcvxcv\",\"gggggggggg\"]', 2, 1, 2, 'gggggggggg', 'mcq', 'Math'),
(128, 1, 'rrrrrrrr', '[\"ttttttttttt\",\"bbbbbbbbbbbb\"]', 2, 1, 2, 'bbbbbbbbbbbb', 'mcq', 'Math'),
(127, 1, 'zxczxc', '[\"asdasd\",\"fddfdf\"]', 2, 1, 2, 'fddfdf', 'mcq', 'Math'),
(126, 1, 'zxczxc', '[\"asdasd\",\"qweqwe\"]', 2, 1, 2, 'qweqwe', 'mcq', 'Math'),
(125, 1, 'zxzxc', '[\"wwwwwwwwwwww\",\"eeeeeeeeeee\"]', 2, 1, 2, 'eeeeeeeeeee', 'mcq', 'Math'),
(124, 1, 'zxzxc', '[\"wwwwwwwwwwww\",\"eeeeeeeeeee\"]', 2, 1, 1, 'eeeeeeeeeee', 'mcq', 'Math'),
(123, 1, 'qweeeee', '[\"wwwwwwwwwwww\",\"eeeeeeeeeee\"]', 2, 1, 1, 'eeeeeeeeeee', 'mcq', 'Math'),
(122, 1, 'qweeeee', '[\"gggg\",\"eeeeeeeeeee\"]', 2, 1, 1, 'eeeeeeeeeee', 'mcq', 'Math'),
(121, 1, 'qweeeee', '[\"gggg\",\"fffffffff\"]', 2, 1, 1, 'fffffffff', 'mcq', 'Math'),
(120, 1, 'qweeeee', '[\"gggg\",\"rrrrrrrrrrr\"]', 2, 1, 1, 'rrrrrrrrrrr', 'mcq', 'Math'),
(119, 1, 'qweeeee', '[\"gggg\",\"rrrrrrrrrrr\"]', 1, 1, 1, 'rrrrrrrrrrr', 'mcq', 'Math'),
(118, 1, 'qweeeee', '[\"qweqzxczzc\",\"vvvvvv\"]', 1, 1, 1, 'vvvvvv', 'mcq', 'Math'),
(117, 1, 'qweeeee', '[\"qweqwe\",\"asdasd\"]', 1, 1, 1, 'asdasd', 'mcq', 'Math'),
(116, 1, 'qweeeee', '[\"wwwwwzxxxxx\",\"assssssss\"]', 0, 1, 1, 'assssssss', 'mcq', 'Math'),
(115, 1, '7mada', '[\"wwwwww\",\"ffffffffffff\"]', 0, 1, 1, 'ffffffffffff', 'mcq', 'Math'),
(114, 1, '7mada', '[\"asdasd\",\"ssssssssssss\"]', 0, 1, 1, 'ssssssssssss', 'mcq', 'Math'),
(113, 1, 'hello?', '[\"hello?\",\"ssssssssssss\"]', 2, 1, 1, 'ssssssssssss', 'mcq', 'Math'),
(112, 1, 'hello?', '[\"hello?\",\"asdasd\"]', 1, 1, 1, 'asdasd', 'mcq', 'Math'),
(111, 1, 'hello?', '[\"hello?\",\"hiii\"]', 0, 1, 1, 'hiii', 'mcq', 'Math'),
(134, 1, 'vbnvbn', '[\"vbnvbn\",\"jjjjjjjjj\"]', 1, 1, 2, 'jjjjjjjjj', 'mcq', 'Math'),
(135, 1, 'vbnvbn', '[\"132131321\",\"zxczxczxc\"]', 0, 1, 2, 'zxczxczxc', 'mcq', 'Math'),
(136, 1, 'vbnvbn', '[\"13213qweqwe\",\"vvvvvvvvv\"]', 0, 1, 2, 'vvvvvvvvv', 'mcq', 'Math'),
(137, 1, 'vbnvbn', '[\"rrrr\",\"ggggggggg\"]', 0, 1, 2, 'ggggggggg', 'mcq', 'Math');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5556 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `email`, `username`, `password`, `created_at`, `updated_at`) VALUES
(5327, 'tonyfayez@gmail.com', 'trb2o etnen bo2o', '123456789', NULL, NULL),
(5555, 'ahmed@gmail.com', 'trmle etnen melly', '123456789', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `student_exams`
--

DROP TABLE IF EXISTS `student_exams`;
CREATE TABLE IF NOT EXISTS `student_exams` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `exam_id` bigint(20) UNSIGNED NOT NULL,
  `answers` text NOT NULL,
  `grade` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student_exams`
--

INSERT INTO `student_exams` (`id`, `student_id`, `exam_id`, `answers`, `grade`, `created_at`, `updated_at`) VALUES
(4, 5327, 79, '[\"wwwwwzxxxxx\",\"rrrr\",\"gggg\",\"mmmmmmm\",\"wwwwwwwwwwww\",\"xcvxcvxcv\"]', 0, NULL, NULL),
(5, 5327, 77, '[\"ssssssssssss\",\"ggggggggg\",\"asdasd\",\"hhhhhhhhhhhhhh\",\"fffffffff\",\"fddfdf\"]', 6, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `student_subject`
--

DROP TABLE IF EXISTS `student_subject`;
CREATE TABLE IF NOT EXISTS `student_subject` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student_subject`
--

INSERT INTO `student_subject` (`id`, `subject_id`, `student_id`, `created_at`, `updated_at`) VALUES
(1, 1, 5327, NULL, NULL),
(2, 2, 5327, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
CREATE TABLE IF NOT EXISTS `subjects` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `supervisor_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `uid` varchar(255) NOT NULL,
  `set_of_criteria` longtext NOT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `endtime` time DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `duration` time NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `supervisor_id`, `title`, `uid`, `set_of_criteria`, `date`, `time`, `endtime`, `datetime`, `duration`, `created_at`, `updated_at`) VALUES
(1, 1, 'Math', 'M101', '[\"1\",\"2\",\"3\"]', '2022-05-19', '10:00:00', '16:00:00', '2022-05-19 16:00:00', '06:00:00', '2022-05-11 19:18:19', '2022-05-16 21:24:47'),
(2, 2, 'Mechanics', 'Mech101', '[\"4\",\"5\",\"6\"]', '2022-05-16', '14:00:00', '20:00:00', '2022-05-15 20:00:00', '06:00:00', '2022-05-18 19:18:19', '2022-05-16 14:21:44');

-- --------------------------------------------------------

--
-- Table structure for table `supervisors`
--

DROP TABLE IF EXISTS `supervisors`;
CREATE TABLE IF NOT EXISTS `supervisors` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supervisors`
--

INSERT INTO `supervisors` (`id`, `email`, `username`, `password`, `created_at`, `updated_at`) VALUES
(1, 'tonyfayez@gmail.com', 'abo alz2aze2', '123456789', '2022-05-11 19:18:19', '2022-05-11 19:18:19'),
(2, 'ahmed@gmail.com', 'abo altnanen', '123456789', '2022-05-11 19:18:19', '2022-05-11 19:18:19');

-- --------------------------------------------------------

--
-- Table structure for table `system_managers`
--

DROP TABLE IF EXISTS `system_managers`;
CREATE TABLE IF NOT EXISTS `system_managers` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `system_managers`
--

INSERT INTO `system_managers` (`id`, `email`, `username`, `password`, `created_at`, `updated_at`) VALUES
(9999, 'tonyfayez@gmail.com', 'tonyfayez@gmail.com', '123456789', NULL, NULL),
(1234, 'ahmed@gmail.com', 'om kalthom', '123456789', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
