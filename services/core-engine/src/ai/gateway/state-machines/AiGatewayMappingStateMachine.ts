export type AiGatewayMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayMappingStateMachine {
  private allowedTransitions: Record<AiGatewayMappingState, AiGatewayMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayMappingState, to: AiGatewayMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayMappingState, to: AiGatewayMappingState): AiGatewayMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayMapping: " + from + " -> " + to);
    }
    return to;
  }
}
