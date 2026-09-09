export type AiGatewaySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewaySnapshotStateMachine {
  private allowedTransitions: Record<AiGatewaySnapshotState, AiGatewaySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewaySnapshotState, to: AiGatewaySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewaySnapshotState, to: AiGatewaySnapshotState): AiGatewaySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewaySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
