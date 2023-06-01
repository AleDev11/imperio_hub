import { PrismaClient } from '@prisma/client';

declare global {
    namespace globalThis {
        var prismadb: PrismaClient;
    }
}

// export default globalThis.prismadb || new PrismaClient();