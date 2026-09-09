export type IotFleetPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetPayloadStateMachine {
  private allowedTransitions: Record<IotFleetPayloadState, IotFleetPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetPayloadState, to: IotFleetPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetPayloadState, to: IotFleetPayloadState): IotFleetPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetPayload: " + from + " -> " + to);
    }
    return to;
  }
}
