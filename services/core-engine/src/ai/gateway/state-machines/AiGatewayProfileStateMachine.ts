export type AiGatewayProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayProfileStateMachine {
  private allowedTransitions: Record<AiGatewayProfileState, AiGatewayProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayProfileState, to: AiGatewayProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayProfileState, to: AiGatewayProfileState): AiGatewayProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayProfile: " + from + " -> " + to);
    }
    return to;
  }
}
