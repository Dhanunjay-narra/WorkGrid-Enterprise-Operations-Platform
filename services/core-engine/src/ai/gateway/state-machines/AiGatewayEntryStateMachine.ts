export type AiGatewayEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayEntryStateMachine {
  private allowedTransitions: Record<AiGatewayEntryState, AiGatewayEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayEntryState, to: AiGatewayEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayEntryState, to: AiGatewayEntryState): AiGatewayEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayEntry: " + from + " -> " + to);
    }
    return to;
  }
}
