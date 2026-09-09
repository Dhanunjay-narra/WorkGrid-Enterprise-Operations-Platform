export type AiGatewayPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayPayloadStateMachine {
  private allowedTransitions: Record<AiGatewayPayloadState, AiGatewayPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayPayloadState, to: AiGatewayPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayPayloadState, to: AiGatewayPayloadState): AiGatewayPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayPayload: " + from + " -> " + to);
    }
    return to;
  }
}
