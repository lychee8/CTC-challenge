import { NextResponse } from 'next/server';
import { pool } from '@/db/pool';
import { handleError } from '@/lib/errors';
import { toRestaurant } from '@/lib/types';

/**
 * GET /api/restaurants
 * Returns all restaurants.
 */
export async function GET() {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM restaurants ORDER BY created_at DESC'
    );
    // Map every row - raw rows don't match the contract (NUMERIC comes back
    // as a string, timestamps as Date objects). See lib/types.ts.
    return NextResponse.json(rows.map(toRestaurant));
  } catch (err) {
    return handleError(err);
  }
}

/**
 * POST /api/restaurants
 * Create a new restaurant.
 *
 * TODO (A2): implement. Read the restaurant fields from the request body,
 * insert a row, and return the created restaurant with a 201 status.
 * TODO (A3): validate before you insert. Nothing validates anything today, so
 * `rating` happily accepts 6. Decide what valid means for each field and reject
 * bad bodies with a 400 rather than letting them reach the database.
 */
export async function POST(request: Request) {
try{
    const body = await request.json();
    const {name, cuisine, address, rating} = body;

    const queryText =
      `INSERT INTO restaurants (name, cuisine, address, rating)
      VALUES ($1, $2, $3, $4)
      RETURNING *;`;

    const values = [name, cuisine, address, rating];
    const result = await pool.query(queryText, values);
   
    const createdRestaurant = result.rows[0];
    if (!createdRestaurant) {
      return NextResponse.json({ error: 'Failed to create restuarant' }, { status: 400 });
    }

    const formattedRestaurant = toRestaurant(createdRestaurant);

    return NextResponse.json(formattedRestaurant, { status: 201});

  } catch (err) {
    console.error("Database Insert Error: ", err);
    return NextResponse.json({ error: 'Not implemented' }, { status: 500 });
  }
}


