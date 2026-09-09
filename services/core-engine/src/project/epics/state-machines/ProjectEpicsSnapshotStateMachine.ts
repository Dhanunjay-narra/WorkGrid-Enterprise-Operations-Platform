export type ProjectEpicsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsSnapshotStateMachine {
  private allowedTransitions: Record<ProjectEpicsSnapshotState, ProjectEpicsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsSnapshotState, to: ProjectEpicsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsSnapshotState, to: ProjectEpicsSnapshotState): ProjectEpicsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
