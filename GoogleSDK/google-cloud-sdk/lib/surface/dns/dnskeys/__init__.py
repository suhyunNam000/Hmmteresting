# Copyright 2015 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""gcloud dns dnskeys command group."""

from googlecloudsdk.calliope import base


@base.Deprecate(is_removed=False, warning=(
    'The `gcloud beta dnskeys` commands are deprecated; please use the '
    '`gcloud beta dnskeys` commands instead.'))
@base.ReleaseTracks(base.ReleaseTrack.BETA)
class Dnskeys(base.Group):
  """Manage Cloud DNS DNSKEY records.

  The commands in this group manage Cloud DNS DNS key resources. A DNS key
  resource represents a cryptographic signing key for use in DNSSEC; a DNSKEY
  record contains a public key used for digitally signing zone data.

  For more information, including instructions for managing and using DNS keys,
  see the [documentation for DNSSEC](https://cloud.google.com/dns/dnssec).
  """
  pass