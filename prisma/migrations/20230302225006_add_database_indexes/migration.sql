-- DropForeignKey
ALTER TABLE `Schedulings` DROP FOREIGN KEY `Schedulings_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_time_intervals` DROP FOREIGN KEY `user_time_intervals_user_id_fkey`;

-- RenameIndex
ALTER TABLE `Schedulings` RENAME INDEX `Schedulings_user_id_fkey` TO `Schedulings_user_id_idx`;

-- RenameIndex
ALTER TABLE `accounts` RENAME INDEX `accounts_user_id_fkey` TO `accounts_user_id_idx`;

-- RenameIndex
ALTER TABLE `user_time_intervals` RENAME INDEX `user_time_intervals_user_id_fkey` TO `user_time_intervals_user_id_idx`;
