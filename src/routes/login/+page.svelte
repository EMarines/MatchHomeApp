<script lang="ts">
	import { Button } from '$components';
	import logo from '$assets/logo_slogan.png';
	import cover from '$assets/cover.png';
</script>

<div class="wrapper">
	<div class="content">
    <div class="header__content">
      <img src={logo} class="logo" alt="Spotify" />
      <div class="header__text">
        <h1>La Manera Facil De Llegar A Casa</h1>
        <p>Seguridad, certeza, comodidad y transparencia es nuestro compromiso</p>
      </div>
    </div>
		<div class="buttons">
			<Button
				element="a"
				variant="outline"
				href="https://www.matchhome.net/"
				target="_blank"
				rel="noopener noreferrer">Sign Up</Button
			>
			<Button element="a" href="/api/auth/login">Login</Button>
		</div>
	</div>
	<div class="cover">
		<img src={cover} alt="MatchHome. Tu Hogar" />
	</div>
</div>

<style lang="scss">
	:global(body) {
		background-image: linear-gradient(230deg, var(--sidebar-color), var(--bg-color));
		height: 100vh;
	}

	.wrapper {
		display: flex;
		width: 100%;
		max-width: 1200px;
		margin: 80px auto 0;
		align-items: center;
		flex-direction: column;
    padding: 15px;
		@include breakpoint.up('md') {
			flex-direction: row;
		}
	}
	.cover {
		flex: 1;
		margin-top: 40px;
		@include breakpoint.up('md') {
			margin-top: 0;
			margin-left: 20px;
		}
		img {
			max-width: 100%;
		}
	}
	.content {
		flex: 1.8;
		h1 {
			font-size: functions.toRem(40);
		}
		p {
			font-size: functions.toRem(20);
		}
		.buttons {
			margin-top: 40px;
			:global(.button) {
				margin-right: 10px;
				padding: 10px 20px;
				text-transform: uppercase;
			}
		}
		.logo {
			width: 30%;
			max-width: 100%;
			margin-bottom: 30px;
		}
	}
  .header__content{
    display: flex;
    flex-direction: row;
    align-items: center;
    @include breakpoint.down('md') {
			flex-direction: column;
		}
  }
  .header__text {
    display: flex;
    flex-direction: column;
    padding: 0 50px 10px;
  }
</style>