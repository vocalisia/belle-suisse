import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BELLE SUISSE';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FFF8F6 0%, #F2E0E0 50%, #D4A0A0 100%)',
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', color: '#1A1A1A', display: 'flex' }}>
          BELLE <span style={{ color: '#D4A0A0', marginLeft: 16 }}>SUISSE</span>
        </div>
        <div style={{ fontSize: 28, color: '#8C8C8C', marginTop: 16, fontStyle: 'italic' }}>
          La beauté a un accent suisse
        </div>
      </div>
    ),
    { ...size }
  );
}
