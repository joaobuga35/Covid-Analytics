import styled from "styled-components";

export const DashboardStyles = styled.div`
main {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    gap: 1.5rem;
    margin-top: 1rem;
    padding: 0 1rem;
}

@media (max-width: 720px) {
    main {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
`